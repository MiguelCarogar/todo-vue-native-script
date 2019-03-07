import Vue from 'nativescript-vue';
import Vuex from 'vuex'
import App from './components/App.vue';

import productStore from './store/index';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');





new Vue({
  render: h => h('frame', [h(App)]),
  store: productStore,
}).$start();
