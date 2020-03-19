import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ListItem from './ListItem';
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

let getStore = (actions) =>  {
    return new Vuex.Store({
        modules: {
            cartStore: {
                namespaced: true,
                actions: actions
            }
        }
    });
};

describe('ListItem', () => {
    let store;
    let actions;
    let wrapper;

    beforeEach(() => {
        actions = {
            updateCart: jest.fn(),
        };

        store = getStore(actions);

        wrapper = shallowMount(ListItem, {router, store, localVue , propsData: {
                book: MOCK_BOOK_RESULT_LIST[0]
            }
        });
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(ListItem).toBeDefined();
        expect(ListItem.name).toEqual('list-item');
        expect(typeof ListItem.methods.updateCart).toEqual('function');
        expect(wrapper.find('.deal-product-content h4 .cursor').text()).toEqual(MOCK_BOOK_RESULT_LIST[0].title);


    });


    it('Should dispatches "updateCart" when clicking on add Cart', () => {
        const button = wrapper.find('.availability .cursor');
        button.trigger('click');
        expect(actions.updateCart).toHaveBeenCalled();
    });
});