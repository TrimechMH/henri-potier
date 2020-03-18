import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync'
import App from './App.vue';
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VueResource from 'vue-resource';
import numeral from 'numeral';

import './assets/css/css.js'

import {createRouter as createRouterOriginal} from './router';
import {createStore as createStoreOriginal} from './store';

Vue.config.productionTip = false;

// Map to window
window._ = lodash;

export const setupApp = ({createRouter = createRouterOriginal, createStore = createStoreOriginal} = {}) => {

    Vue.use(VueRouter);
    Vue.use(Vuex);
    Vue.use(VueResource);
    Vue.use(VueLodash, { name: 'custom' , lodash: lodash });

    Vue.filter('numeral', (value, format) => {
        return numeral(value).format(format);
    });

    const store = createStore();
    const router = createRouter();

    sync(store, router);
    return {store, router};
};

const { store, router } = setupApp();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

export default setupApp;