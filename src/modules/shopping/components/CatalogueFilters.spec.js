import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CatalogueFilters from './CatalogueFilters';
import VueRouter from 'vue-router';
import lodash from 'lodash';
import VueLodash from 'vue-lodash';

const localVue = createLocalVue();
const router = new VueRouter({
    history: true,
});

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(VueLodash, {name: 'custom', lodash: lodash});

let getStore = (mutations) => {
    return new Vuex.Store({
        modules: {
            shoppingStore: {
                namespaced: true,
                mutations
            }
        }
    });
};

describe('CatalogueFilters', () => {

    let store;
    let mutations;
    let wrapper;

    beforeEach(() => {
        mutations = {
            setSearchValue: jest.fn()
        };

        store = getStore(mutations);
        wrapper = shallowMount(CatalogueFilters, {router, store, localVue});
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(CatalogueFilters).toBeDefined();
        expect(CatalogueFilters.name).toEqual('catalogue-filters');
        expect(typeof CatalogueFilters.methods.setSearchValue).toEqual('function');
        expect(wrapper.vm.$data.search).toBeNull();
    });

    it('Should commit "setSearchValue" on input changes', async () => {
        const input = wrapper.find('.price-slider-amount input#search');
        input.setValue('Hello');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.search).toEqual('Hello');
        expect(mutations.setSearchValue).toBeCalled();
    });

    it('Should commit "setSearchValue" on reset search click', async () => {
        const resetBtn = wrapper.find('.widget-buttom input');
        resetBtn.trigger('click');

        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.search).toEqual('');
        expect(mutations.setSearchValue).toBeCalled();
    });

});