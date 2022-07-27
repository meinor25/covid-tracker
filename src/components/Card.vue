<template>
  <div :class="[bgColor, 'mx-auto rounded text-white p-2 shadow-xl']">
    <h3 class="text-2xl text-center font-bold">{{ header }}</h3>
    <div class="p-3 text-center">
      <p>
        New Cases: <span class="font-bold">{{ newCases }}</span>
      </p>
      <p>
        Total Cases: <span class="font-bold">{{ totalCases }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    bgColor: String,
    header: String,
    newCases: Number,
    totalCases: Number,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
