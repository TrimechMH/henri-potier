import store from './index';
import { SET_CART } from './mutations.types';
import { MOCK_BOOK_RESULT_LIST, CART } from '../../../common/mocks/object-models';

const { mutations, state } = store;

describe('cart mutations', () => {

    it('SET_CART', () => {
        expect(state.cart).toEqual( {
            cartList: [],
            totalPrice: 0,
            bestOffer: {},
        });
        mutations[SET_CART](state,  CART);
        expect(state.cart).toEqual(CART);
    });

});

