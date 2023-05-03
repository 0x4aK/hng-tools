<template>
  <l-layer-group>
    <l-circle
      v-for="(target, index) in targets"
      :key="'c' + index"
      :lat-lng="[target.y, target.x]"
      :radius="24"
      color="#f00"
      :fill="false"
      :interactive="false"
    />

    <l-polyline
      v-for="(line, index) in lines"
      :key="'l' + index"
      :lat-lngs="line"
      :color="lineColor ? '#6b56d6' : '#aaa'"
      :weight="8"
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
import { getFinalCoords } from "@/utils/supplylines";
import { countHops, distance, distToTime } from "@/utils/distance";

export default {
  components: {
    LLayerGroup,
    LCircle,
    LMarker,
    LIcon,
    LPolyline,
  },

  computed: {
    paths() {
      if (!this.primary) return [];

      if (!this.secondary)
        return this.primaryObj.a.map((route) => {
          const [nId] = route.split(":");
          const nBf = this.battlefields[nId];

          return {
            path: [route, this.primary],
            cost: distance(this.primaryObj, nBf),
          };
        });

      const heap = new Heap((a, b) => a.cost - b.cost);
      const seen = new Set();

      heap.push({
        id: this.secondary,
        path: [this.secondary],
        cost: 0,
      });

      while (heap.length) {
        const { cost, id, path } = heap.pop();

        if (id == this.primary) return [{ cost, path: [this.primary, ...path] }];

        if (seen.has(id)) continue;
        seen.add(id);

        const bf = this.battlefields[id];

        for (const adjacent of bf.a) {
          const [nId] = adjacent.split(":");
          const nBf = this.battlefields[nId];

          heap.push({
            id: nId,
            path: [adjacent, ...path],
            cost: cost + distance(bf, nBf),
          });
        }
      }

      return [];
    },

    lines() {
      if (!this.paths) return [];

      const lines = [];

      for (const path of this.paths) {
        for (const node of path.path) {
          const [, slId] = node.split(":");

          if (!slId) continue;
          const aps = this.supplylines[slId];

          const startAp = this.accesspoints[aps[0]];
          const endAp = this.accesspoints[aps[1]];

          const start = getFinalCoords(this.battlefields[startAp.b], this.templates[startAp.t]);
          const end = getFinalCoords(this.battlefields[endAp.b], this.templates[endAp.t]);
          lines.push([start, end]);
        }
      }

      return lines;
    },

    targets() {
      if (!this.paths) return [];

      const targets = [];

      for (const path of this.paths) {
        for (const node of path.path) {
          const [bfId] = node.split(":");

          if ([this.primary, this.secondary].includes(bfId)) continue;

          const bf = this.battlefields[bfId];
          targets.push({ x: bf.x, y: bf.y });
        }
      }

      return targets;
    },

    times() {
      if (!this.unit || !this.paths) return [];

      const times = [];

      for (const path of this.paths) {
        const [bfId] = path.path[0].split(":");
        const bf = this.battlefields[bfId];
        const hops = countHops(path.path);
        const time = distToTime(
          path.cost,
          this.unit?.speed,
          this.modifier?.multiplier,
          this.lineColor ? 1 : 3,
          hops,
          this.ingame ? 10 : 0
        );

        console.debug(
          "times:",
          this.battlefields[bfId].n,
          "=>",
          this.battlefields[path.path[path.path.length - 1]].n,
          path.cost,
          time,
          "hops:",
          hops
        );

        times.push({
          x: bf.x,
          y: bf.y,
          time: time,
        });
      }

      return times;
    },

    ...mapState({
      battlefields: (state) => state.battlefields || null,
      accesspoints: (state) => state.accesspoints || null,
      templates: (state) => state.templates || null,
      supplylines: (state) => state.supplylines || null,
      lineColor: (state) => state.ground.lineColor,
      primary: (state) => state.primaryBattlefield,
      secondary: (state) => state.secondaryBattlefield,
      ingame: (state) => state.ingameTimer,
    }),
    ...mapGetters({
      modifier: "selectedModifierObject",
      unit: "ground/selectedUnitObject",
      primaryObj: "primaryBattlefieldObject",
    }),
  },
};
</script>
