import Vue from 'vue';
// Mutation Types
import { SET_CART } from './mutations.types';

const mutations = {
    [SET_CART](state, cart) {
        Vue.set(state, 'cart', cart);
    }
};

export default mutations;
