import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CatalogueDetails from './CatalogueDetails';
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
        name: 'catalogue',
    }]
});

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(VueLodash, {name: 'custom', lodash: lodash});
localVue.filter('numeral', (value, format) => {
    return numeral(value).format(format);
});

let cartStoreActions = {
    updateCart: jest.fn(),
};

let getStore = (actions, state) =>  {
    return new Vuex.Store({
        modules: {
            shoppingStore: {
                namespaced: true,
                actions,
                state
            },
            cartStore: {
                namespaced: true,
                actions: cartStoreActions
            }
        }
    });
};

describe('CatalogueDetails', () => {
    let store;
    let actions;
    let state;
    let wrapper;

    beforeEach(() => {

        actions = {
            getBooksAction: jest.fn().mockResolvedValue(MOCK_BOOK_RESULT_LIST),
        };
        state = {
            bookListResult: MOCK_BOOK_RESULT_LIST
        };
        store = getStore(actions, state);

        wrapper = shallowMount(CatalogueDetails, {router, store, localVue});
        wrapper.vm.$route.query.bookIsbn = 'c8fabf68-8374-48fe-a7ea-a00ccd07afff';
        expect(actions.getBooksAction).not.toHaveBeenCalled();
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(CatalogueDetails).toBeDefined();
        expect(CatalogueDetails.name).toEqual('catalogue-details');
        expect(typeof CatalogueDetails.methods.updateCart).toEqual('function');
        expect(typeof CatalogueDetails.methods.getBooksAction).toEqual('function');
        expect(typeof CatalogueDetails.created).toEqual('function');
    });


    it('Should dispatches "getBooksAction" on component created hooks', () => {
        state = {
            bookListResult: []
        };
        store = getStore(actions, state);

        wrapper = shallowMount(CatalogueDetails, {router, store, localVue});
        wrapper.vm.$route.query.bookIsbn = 'c8fabf68-8374-48fe-a7ea-a00ccd07afff';
        expect(actions.getBooksAction).toHaveBeenCalled();

        expect(wrapper.vm.$data.bookDetails).toBeNull();
    });

    it('Should dispatches "getBooksAction" on component created hooks and redirect to catalogue page', () => {
        state = {
            bookListResult: []
        };
        actions = {
            getBooksAction: jest.fn().mockRejectedValue('Error')
        };
        store = getStore(actions, state);

        wrapper = shallowMount(CatalogueDetails, {router, store, localVue});
        wrapper.vm.$route.query.bookIsbn = 'c8fabf68-8374-48fe-a7ea-a00ccd07afff';
        expect(actions.getBooksAction).toHaveBeenCalled();
        expect(wrapper.vm.$route.name).toEqual('catalogue');
    });

    it('Should render cart data', async () => {
        state = {
            bookListResult: MOCK_BOOK_RESULT_LIST
        };
        store = getStore(actions, state);

        wrapper = shallowMount(CatalogueDetails, {router, store, localVue});
        wrapper.vm.$route.query.bookIsbn = 'c8fabf68-8374-48fe-a7ea-a00ccd07afff';

        expect(actions.getBooksAction).not.toHaveBeenCalled();
        expect(wrapper.vm.$data.bookDetails).toBeDefined();
        expect(wrapper.find('div.single-product-details #title').text()).toEqual(MOCK_BOOK_RESULT_LIST[0].title);
    });

    it('Should handle update quantity', () => {

        const increaseBtn = wrapper.find('#quantity-wanted-p .inc');
        const decreaseBtn = wrapper.find('#quantity-wanted-p .dec');
        expect(wrapper.vm.$data.quantity).toEqual(1);

        // do not decrease <= 1
        decreaseBtn.trigger('click');
        wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.quantity).toEqual(1);

        increaseBtn.trigger('click');
        wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.quantity).toEqual(2);

        // > 1 decrease
        decreaseBtn.trigger('click');
        wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.quantity).toEqual(1);
    });

    it('Should dispatches "updateCart" when clicking on remove Cart', () => {
        const button = wrapper.find('.product-attributes span .cursor');
        button.trigger('click');
        expect(cartStoreActions.updateCart).toHaveBeenCalled();
    });

});