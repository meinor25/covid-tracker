<template>
  <div class="m-0">
    <!-- HEADER -->
    <header>
      <div class="py-5 bg-sky-500">
        <h1 class="text-2xl pt-5 text-center text-white font-bold md:text-4xl">
          Covid-19 tracker
        </h1>
        <p class="text-center text-white text-1xl">by Isaias Rodriguez</p>
      </div>
    </header>

    <!-- CONTENT -->
    <div class="container w-4/5 mx-auto">
      <div class="flex flex-col pt-7 align-center h-80">
        <h1 class="text-2xl font-bold text-center">
          {{ selectedCountry }}
        </h1>
        <Clock></Clock>
        <div class="" v-if="!loading">
          <!-- GLOBAL CASES  -->
          <Card
            bgColor="bg-blue-300"
            header="Summary"
            :newCases="cases.NewConfirmed"
            :totalCases="cases.TotalConfirmed"
            class="mt-4 w-60"
          />
        </div>
        <div v-else class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div>
      </div>

      <!-- SELECT COUNTRY -->
      <h3 class="text-center pt-5">Select a country</h3>
      <div class="m-0 flex justify-center mt-5">
        <select
          name="paises"
          v-model="selectedCountry"
          class="form-select block w-4/5 border-2 border-sky-500 rounded"
          @change="getSelectedValue"
        >
          <option value="select" disabled selected hidden>
            --Select an option--
          </option>
          <option
            :value="country.Country"
            v-for="(country, i) in countries"
            :key="i"
          >
            {{ country.Country }}
          </option>
        </select>
      </div>
      <!-- END OF SELECT -->
    </div>
    <!-- END OF CONTENT -->
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import Clock from "./components/Clock.vue";
import Card from "./components/Card.vue";

export default {
  setup() {
    //Store
    const store = useStore();
    //Data
    const countries = computed(() => store.state.countries);
    const selectedCountry = ref("Global");
    const loading = ref(false);
    const cases = computed(() => store.state.cases);
    //Methods
    const getSelectedValue = () => {
      // console.log(selectedCountry.value);
    };
    //Lifecycles
    onMounted(async () => {
      loading.value = true;

      await store.dispatch("getCountries");
      await store.dispatch("getGlobalCases");

      loading.value = false;
    });
    return {
      countries,
      getSelectedValue,
      selectedCountry,
      loading,
      cases,
    };
  },
  components: { Clock, Card },
};
</script>

<style lang="scss" scoped></style>
