import { createStore } from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export default createStore({
  state: {
    countries: [],
    singleCountryInfo: [],
    cases: {},
  },
  mutations: {
    fillCountries(state, payload) {
      state.countries = payload;
    },
    fillContryInfo(state, payload) {
      state.singleCountryInfo = payload;
    },
    fillCases(state, payload) {
      state.cases = payload;
    },
  },
  actions: {
    //Get countries
    async getCountries({ commit }) {
      try {
        const { data } = await instance.get("/countries");
        commit("fillCountries", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getGlobalCases({ commit }) {
      const { data } = await instance.get("/summary");
      commit("fillCases", data.Global);
    },
    async getCountryData({ commit }) {
      const data = await instance.get("/");
    },
  },
});
