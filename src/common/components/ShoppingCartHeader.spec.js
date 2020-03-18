import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ShoppingCartHeader from './ShoppingCartHeader';
import VueRouter from 'vue-router';
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import numeral from 'numeral';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(VueLodash, { name: 'custom' , lodash: lodash });
localVue.filter('numeral', (value, format) => {
    return numeral(value).format(format);
});


describe('ShoppingCartHeader', () => {
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
                                synopsis: ['test'],
                                quantity: 1
                            }],
                            totalPrice: 35,
                            bestOffer: {
                                type: 'minus',
                                value: 15,
                                proposedOffer: 34
                            }
                        }
                    }
                }
            }
        })
    });

    // Inspect the raw component options
    it('Should be created', () => {
        expect(ShoppingCartHeader).toBeDefined();
        expect(ShoppingCartHeader.name).toEqual('shopping-cart-header');
    });

    it('Should render cart data', () => {
        const wrapper = shallowMount(ShoppingCartHeader, { router , store, localVue });
        expect(wrapper.find('li.shoping-cart .cursor span').text()).toEqual('1');
        expect(wrapper.find('span.total').text()).toEqual('€ 34.00');
        expect(wrapper.find('span.free-shiping').text()).toEqual('€ 1.00');
    });
});