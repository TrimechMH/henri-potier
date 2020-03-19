import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from './Cart';
import VueRouter from 'vue-router';
import numeral from 'numeral';

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
                        cart: {
                            cartList: [{
                                isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
                                title: 'Henri Potier à l\'école des sorciers',
                                price: 35,
                                cover: 'http://henri-potier.xebia.fr/hp0.jpg',
                                synopsis: ['test']
                            }],
                            totalPrice: 0,
                            bestOffer: {
                                type: 'minus',
                                value: 15
                            }
                        }
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
        expect(wrapper.find('.subtotal-area h2').text().replace( /\s/g, '')).toEqual('SUBTOTAL€0.00');
    });
});