import { createStore } from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com/",
});

export default createStore({
  state: {
    countries: [],
    singleCountryInfo: [],
  },
  mutations: {
    fillCountries(state, payload) {
      state.countries = payload;
    },
    fillContryInfo(state, payload) {
      state.singleCountryInfo = payload;
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

    async getCountryData({ commit }) {
      const data = await instance.get("/");
    },
  },
});
