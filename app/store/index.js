import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import * as mutations from './mutations';

Vue.use(Vuex);

// Store

const productStore = new Vuex.Store({
  mutations,
  state: {
    productsToBuy: [],
    boughtProducts: []
  }
});

export default productStore;