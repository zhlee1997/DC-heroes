<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heroes {{ numberOfHeroes }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in heroes"
        :key="hero.name"
      >
        {{ index }} : {{ hero.name }}
        <button @click="remove(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="border rounded-lg" type="text" v-model.lazy="newHero" />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-purple-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
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
