<template>
  <v-container class="fun" fluid>
    <v-container>
      <v-row class="mx-4 mt-16" justify="center">
        <v-col cols="6" sm="4" md="3">
          <v-card :color="isEnoughTotal ? 'success' : 'error'">
            <v-card-title>
              Tickets: <span class="ml-2">{{ totalTickets }} / {{ ticketsNeeded }}</span>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-card :color="isEnoughInfPara ? 'success' : 'error'">
            <v-card-title>Inf/Para Tickets</v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <v-card :color="isFun ? 'success' : 'error'">
            <v-card-title>Battle is {{ isFun ? "fun" : "not fun" }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <progress-bar
      class="mx-n4 my-6"
      :max="ticketsNeeded"
      :bars="resources"
      :halfColor="isEnoughInfPara ? '#0f0' : 'red'"
    />

    <v-container class="px-lg-16">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6" class="mx-md-14 mx-lg-0">
          <mode-selector v-model="mode" class="fill-height" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <category-card title="Infantry" :category="ground" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <category-card title="Paras" :category="paras" :disabled="mode == 1" />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <category-card title="Tankers" :category="tanks" :maxFields="3" :disabled="mode == 1" />
        </v-col>
        <v-col cols="12" md="8" lg="6">
          <category-card title="Pilots" :category="planes" :maxFields="2" :disabled="mode == 1" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CategoryCard from "@/components/FunCalc/CategoryCard.vue";
import ModeSelector from "@/components/FunCalc/ModeSelector.vue";
import ProgressBar from "@/components/FunCalc/ProgressBar.vue";

export default {
  name: "FunCalc",

  components: { CategoryCard, ModeSelector, ProgressBar },

  data: () => ({
    mode: 0,
    ground: {
      infantry: { label: "Infantry", icon: "infantry", value: 0 },
      recons: { label: "Recons", icon: "recon", value: 0 },
    },
    paras: {
      para: { label: "Paras", icon: "para", value: 0 },
      planes: { label: "Para Planes", icon: "paraplane", value: 0 },
    },
    tanks: {
      tankers: { label: "Tankers", icon: "tanker", value: 0 },
      light: { label: "Light Tanks", icon: "lighttank", value: 0 },
      medium: { label: "Medium Tanks", icon: "mediumtank", value: 0 },
      heavy: { label: "Heavy Tanks", icon: "heavytank", value: 0 },
      td: { label: "Tank Destroyers", icon: "td", value: 0 },
      htd: { label: "Heavy Tank Destroyer", icon: "heavytd", value: 0 },
    },
    planes: {
      pilots: { label: "Pilots", icon: "pilot", value: 0 },
      recon: { label: "Recon Planes", icon: "reconplane", value: 0 },
      fighter: { label: "Fighters", icon: "fighter", value: 0 },
      heavy: { label: "Heavy Planes", icon: "heavyplane", value: 0 },
    },
  }),

  computed: {
    ticketsNeeded() {
      return !this.mode ? 18 : 12;
    },

    infantryTickets() {
      return Math.floor(this.ground.infantry.value / 12);
    },
    reconTickets() {
      return Math.floor(this.ground.recons.value / 10);
    },
    paraTickets() {
      return Math.min(
        Math.floor(this.paras.para.value / 12),
        Math.floor(this.paras.planes.value / 4)
      );
    },
    tankerTickets() {
      const tanks =
        Math.floor(this.tanks.light.value / 10) +
        Math.floor(this.tanks.medium.value / 10) +
        Math.floor(this.tanks.heavy.value / 10) +
        Math.floor(this.tanks.td.value / 10) +
        Math.floor(this.tanks.htd.value / 10);
      return Math.min(tanks, Math.floor(this.tanks.tankers.value / 10));
    },
    pilotTickets() {
      const planes =
        Math.floor(this.planes.recon.value / 10) +
        Math.floor(this.planes.fighter.value / 10) +
        Math.floor(this.planes.heavy.value / 10);
      return Math.min(planes, Math.floor(this.planes.pilots.value / 10));
    },

    totalTickets() {
      if (this.mode == 1) return this.infantryTickets;

      return (
        this.infantryTickets +
        this.reconTickets +
        this.paraTickets +
        this.tankerTickets +
        this.pilotTickets
      );
    },

    isEnoughInfPara() {
      if (this.mode == 1) return this.infantryTickets >= this.ticketsNeeded / 2;
      return this.infantryTickets + this.paraTickets >= this.ticketsNeeded / 2;
    },
    isEnoughTotal() {
      return this.totalTickets >= this.ticketsNeeded;
    },

    isFun() {
      return this.isEnoughInfPara && this.isEnoughTotal;
    },

    resources() {
      if (this.mode == 1)
        return [
          { color: "#2ab32a", value: this.infantryTickets },
          { color: "#2294ff", value: 0 },
          { color: "#f00", width: 5 },
          { color: "#b7d62f", value: 0 },
          { color: "#9e0000", value: 0 },
          { color: "#00aaa2", value: 0 },
        ];

      return [
        { color: "#2ab32a", value: this.infantryTickets },
        { color: "#2294ff", value: this.paraTickets },
        { color: "#f00", width: 5 },
        { color: "#b7d62f", value: this.reconTickets },
        { color: "#9e0000", value: this.tankerTickets },
        { color: "#00aaa2", value: this.pilotTickets },
      ];
    },
  },
};
</script>

<style lang="scss">
.fun {
  .v-card {
    transition: background-color 0.5s ease;
  }
}
</style>
