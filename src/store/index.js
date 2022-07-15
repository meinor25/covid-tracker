import { createStore } from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export default createStore({
  state: {
    countries: [],
  },
  mutations: {
    fillCountries(store, payload) {
      state.countries = payload;
    },
  },
  actions: {},
  getters: {
    getCountries(state) {
      return state.countries;
    },
  },
});
