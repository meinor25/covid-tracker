<template>
  <div class="m-0">
    <!-- HEADER -->
    <header>
      <div class="py-5 bg-sky-500">
        <h1 class="text-2xl pt-5 text-center text-white font-bold md:text-4xl">
          Covid-19 tracker
        </h1>
      </div>
    </header>

    <div class="m-0 flex justify-center mt-5">
      <select name="paises" placeholder="Selecciona un pais"></select>
    </div>
    <div class="bg-"></div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    //Store
    const store = useStore();

    //Data
    const countries = computed(() => store.getters.getCountries);

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
