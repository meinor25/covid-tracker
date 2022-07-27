<template>
  <div class="text-center">
    <h2>{{ day }}</h2>
    <p>{{ time }}</p>
  </div>
</template>

<script>
import moment from "moment";
import { ref } from "vue";

export default {
  name: "Clock",
  setup() {
    //Data
    const day = ref(moment().format("MMMM Do YYYY"));
    const time = ref("");

    //Methods
    const timeManager = () => {
      setInterval(() => {
        let now = moment();
        let format = now.format("LT");
        time.value = format;
      }, 1000);
    };

    //Created
    timeManager();

    return {
      day,
      time,
    };
  },
};
</script>

<style lang="scss" scoped></style>
