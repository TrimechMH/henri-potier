import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductModal from './ProductModal';
import VueRouter from 'vue-router';
import lodash from 'lodash';
import VueLodash from 'vue-lodash';
import numeral from 'numeral';
import { MOCK_BOOK_RESULT_LIST } from '../../../common/mocks/object-models';

const localVue = createLocalVue();

const router = new VueRouter({
    history: true,
    routes: [{
        path: '/',
        name: 'details',
    }],
});
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(VueLodash, {name: 'custom', lodash: lodash});
localVue.filter('numeral', (value, format) => {
    return numeral(value).format(format);
});

let state = {
    bookSelected: MOCK_BOOK_RESULT_LIST[1]
};

let getStore = (actions, mutations) =>  {
    return new Vuex.Store({
        modules: {
            shoppingStore: {
                namespaced: true,
                mutations,
                state
            },
            cartStore: {
                namespaced: true,
                actions: actions
            }
        }
    });
};

describe('ProductModal', () => {
    let store;
    let actions;
    let mutations;
    let wrapper;

    beforeEach(() => {
        actions = {
            updateCart: jest.fn(),
        };
        mutations = {
            setBookSelected: jest.fn(),
        };

        store = getStore(actions, mutations);

        wrapper = shallowMount(ProductModal, {router, store, localVue , propsData: {
                book: MOCK_BOOK_RESULT_LIST[0]
            }
        });
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(ProductModal).toBeDefined();
        expect(ProductModal.name).toEqual('product-modal');
        expect(typeof ProductModal.methods.updateCart).toEqual('function');
        expect(typeof ProductModal.methods.setBookSelected).toEqual('function');
        expect(wrapper.find('.product-info h1').text()).toEqual(MOCK_BOOK_RESULT_LIST[1].title);
    });

    it('Should commit "setSelectedBook" on close modal click', () => {
        const openModalBtn = wrapper.find('.modal-header button');
        openModalBtn.trigger('click');
        expect(mutations.setBookSelected).toHaveBeenCalledWith(state, undefined);
    });

    it('Should dispatches "updateCart" when clicking on add Cart', async () => {
        const button = wrapper.find('.quick-add-to-cart .cart .single_add_to_cart_button');
        const input = wrapper.find('input#french-hens');
        input.setValue('12');
        button.trigger('click');
        await wrapper.vm.$nextTick();

        expect( wrapper.vm.$data.quantity).toEqual('12');
        expect(actions.updateCart).toHaveBeenCalled();
    });

    it('Should commit "setSelectedBook" on destroy component', () => {
        wrapper.vm.$destroy();
        expect(mutations.setBookSelected).toHaveBeenCalledWith(state, undefined);
    });
});