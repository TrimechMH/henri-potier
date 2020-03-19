import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from './Cart';
import VueRouter from 'vue-router';
import numeral from 'numeral';
import { CART } from '../../../common/mocks/object-models';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.filter('numeral', (value, format) => {
    return numeral(value).format(format);
});

describe('Cart', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                cartStore : {
                    namespaced: true,
                    state: {
                        cart: CART
                    }
                }
            }
        })
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(Cart).toBeDefined();
        expect(Cart.name).toEqual('cart');
    });

    it('Should render cart data', () => {
        const wrapper = shallowMount(Cart, { router , store, localVue });
        expect(wrapper.find('.subtotal-area h2').text().replace( /\s/g, '')).toEqual('SUBTOTAL€1.00');
    });
});