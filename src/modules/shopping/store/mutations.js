import Vue from 'vue';
// Mutation Types
import { BOOK_LIST_RESULT } from './mutations.types';

const mutations = {
    [BOOK_LIST_RESULT](state, bookListResult) {
        Vue.set(state, 'bookListResult', bookListResult);
    },
    setBookSelected(state, bookSelected) {
        Vue.set(state, 'bookSelected', bookSelected);
    },
    setSearchValue(state, searchValue) {
        Vue.set(state, 'searchValue', searchValue);
    }
};

export default mutations;
