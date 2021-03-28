<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center ">Calendar</h1>
    <section class="mx-2 flex justify-around">
      <h2 class="font-bold text-2xl">{{ getCurrentMonthName }}</h2>
      <h2 class="font-bold text-2xl">{{ year }}</h2>
      <!-- <h2 class="font-bold text-2xl">{{ getStartDay(year, month) }}</h2> -->
    </section>
    <section class="flex my-3">
      <p
        class="p-2 text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="p-2 text-center"
        style="width: 14.28%"
        v-for="day in getStartDay(year, month)"
        :key="day"
      ></p>
      <p
        class="p-2 text-center"
        style="width: 14.28%"
        v-for="day in getDaysInMonth(year, month)"
        :key="day"
        :class="getToday(day)"
      >
        {{ day }}
      </p>
    </section>
    <section class="mx-2 flex justify-around">
      <button class="border-2 px-2 rounded-lg" @click="prev">&lt;</button>
      <button class="border-2 px-2 rounded-lg" @click="next">&gt;</button>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    this.month = this.getCurrentMonth();
    this.year = this.getCurrentYear();
  },
  computed: {
    getCurrentMonthName() {
      return new Date(this.year, this.month - 1).toLocaleString("default", {
        month: "long",
      });
    },
  },
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      month: "",
      year: "",
    };
  },
  methods: {
    prev() {
      if (this.month === 1) {
        this.year--;
        this.month = 13;
      }
      this.month--;
    },
    next() {
      if (this.month === 12) {
        this.year++;
        this.month = 0;
      }
      this.month++;
    },
    getCurrentMonth() {
      return new Date().getMonth() + 1;
    },

    getCurrentYear() {
      return new Date().getFullYear();
    },
    getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    getStartDay(year, month) {
      return new Date(year, month - 1, 1).getDay();
    },
    getToday(day) {
      let today = new Date().toDateString();
      let todayInMonth = new Date(
        this.year,
        this.month - 1,
        day
      ).toDateString();
      return today === todayInMonth ? "font-bold text-red-500 " : "";
    },
  },
};
</script>

<style></style>
