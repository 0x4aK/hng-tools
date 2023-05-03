<template>
  <l-layer-group>
    <l-circle
      v-for="(airfield, index) in airfields"
      :key="'a' + index"
      :lat-lng="[airfield.y, airfield.x]"
      :radius="28"
      color="#b9b85e"
      :fill="false"
      :interactive="false"
    />

    <l-polyline
      v-for="(line, index) in lines"
      :key="'l' + index"
      :lat-lngs="line"
      :color="color"
      :weight="1"
      :interactive="false"
      pane="markerPane"
    />

    <l-circle
      v-for="(airfield, index) in ranges"
      :key="'r' + index"
      :lat-lng="[airfield.y, airfield.x]"
      :radius="reach * 0.5"
      :color="color"
      :weight="1"
      :fill="true"
      :fillColor="color"
      :fillOpacity="0.1"
      :interactive="false"
    />

    <l-marker
      v-for="(time, index) in times"
      :key="'t' + index"
      :lat-lng="[time.y, time.x]"
      :interactive="false"
      pane="tooltipPane"
    >
      <l-icon :iconSize="[100, 26]">
        <div class="overlay-text">
          {{ time.time }}
        </div>
      </l-icon>
    </l-marker>
  </l-layer-group>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("timings");

import { LLayerGroup, LCircle, LMarker, LIcon, LPolyline } from "vue2-leaflet";

import Heap from "heap-js";
import { distToTime, distance, canReach } from "@/utils/distance";

export default {
  components: {
    LLayerGroup,
    LCircle,
    LMarker,
    LIcon,
    LPolyline,
  },

  methods: {
    getReachingAirfields(battlefieldId) {
      if (!battlefieldId) return [];

      const results = [];

      for (const [id, airfield] of Object.entries(this.airfields)) {
        const dist = canReach(
          airfield,
          this.battlefields[battlefieldId],
          this.reach
        );

        if (dist) results.push({ id: id, cost: dist });
      }

      return results;
    },
  },

  computed: {
    reach() {
      return this.isTransport ? this.unit?.transport : this.unit?.attack;
    },
    color() {
      return this.isTransport ? "#00f" : "#f00";
    },

    paths() {
      if (this.isTransport && ![3, 4].includes(this.secondaryObj?.m))
        this.$store.commit("timings/SET_SELECTED_BATTLEFIELD", {
          target: 1,
          id: null,
        });

      if (this.secondary && ![3, 4].includes(this.secondaryObj?.m))
        this.$store.commit("timings/SET_SELECTED_BATTLEFIELD", {
          target: 2,
          id: null,
        });

      if (!this.primary) return [];
      if (!this.unit) return [];

      if (this.isTransport) {
        const heap = new Heap((a, b) => a.cost - b.cost);
        const seen = new Set();

        heap.push({
          id: this.secondary,
          path: [this.secondary],
          cost: 0,
        });

        while (heap.length) {
          const { cost, id, path } = heap.pop();

          if (id == this.primary)
            return [{ cost, path: [this.primary, ...path] }];

          if (seen.has(id)) continue;
          seen.add(id);

          const bf = this.battlefields[id];

          for (const reaching of this.getReachingAirfields(id)) {
            const nBf = this.battlefields[reaching.id];

            heap.push({
              id: reaching.id,
              path: [reaching.id, ...path],
              cost: cost + distance(bf, nBf),
            });
          }
        }
      }

      if (this.secondary) {
        if (!canReach(this.secondaryObj, this.primaryObj, this.reach))
          return [];

        return [
          {
            cost: distance(this.secondaryObj, this.primaryObj),
            path: [this.secondary, this.primary],
          },
        ];
      }

      return this.getReachingAirfields(this.primary).map((reaching) => ({
        cost: reaching.cost,
        path: [reaching.id, this.primary],
      }));
    },

    lines() {
      if (!this.paths) return [];

      const lines = [];

      for (const path of this.paths) {
        for (let i = 0; i < path.path.length - 1; i++) {
          const from = this.battlefields[path.path[i]];
          const to = this.battlefields[path.path[i + 1]];

          lines.push([
            [from.y, from.x],
            [to.y, to.x],
          ]);
        }
      }

      return lines;
    },

    times() {
      if (!this.unit || !this.paths) return [];

      const times = [];

      for (const path of this.paths) {
        const bfId = path.path[0];
        const bf = this.battlefields[bfId];
        const time = distToTime(
          path.cost,
          this.unit?.speed,
          this.modifier?.multiplier,
          1,
          1,
          this.ingame ? 12 : 0
        );

        console.debug(
          "times:",
          this.battlefields[bfId].n,
          "=>",
          this.battlefields[path.path[path.path.length - 1]].n,
          path.cost,
          time
        );

        times.push({
          x: bf.x,
          y: bf.y,
          time: time,
        });
      }

      return times;
    },

    ranges() {
      if (!this.drawRanges || !this.unit || !this.paths) return [];

      if (!this.secondary && this.primary)
        return [{ x: this.primaryObj.x, y: this.primaryObj.y }];

      const ranges = [];

      for (const path of this.paths) {
        for (const node of path.path) {
          if (node == this.secondary) continue;

          const bf = this.battlefields[node];
          ranges.push({ x: bf.x, y: bf.y });
        }
      }

      return ranges;
    },

    ...mapState({
      battlefields: (state) => state.battlefields,
      primary: (state) => state.primaryBattlefield,
      secondary: (state) => state.secondaryBattlefield,
      isTransport: (state) => state.air.isTransport,
      drawRanges: (state) => state.air.drawRanges,
      ingame: (state) => state.ingameTimer,
    }),
    ...mapGetters({
      airfields: "air/airfields",
      unit: "air/selectedUnitObject",
      modifier: "selectedModifierObject",
      primaryObj: "primaryBattlefieldObject",
      secondaryObj: "secondaryBattlefieldObject",
    }),
  },
};
</script>
