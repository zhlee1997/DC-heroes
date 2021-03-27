<template>
  <AppHeader />
  <div class=" w-full flex">
    <DcHeroes />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DcHeroes from "./components/DcHeroes";

export default {
  components: { AppHeader, DcHeroes },
  computed: {
    numberOfHeroes() {
      return this.heroes.length;
    },
  },
  data() {
    return {
      newHero: "",
      heroes: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
    };
  },
  methods: {
    addHero() {
      if (this.newHero === "") return;
      this.heroes.unshift({ name: this.newHero });
      this.newHero = "";
    },
    remove(index) {
      this.heroes = this.heroes.filter((_, i) => i !== index);
    },
  },
};
</script>

<style></style>
