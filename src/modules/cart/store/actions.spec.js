jest.mock('../services/cart.service');
import { SET_CART } from './mutations.types';
import { CART, MOCK_BOOK_RESULT_LIST } from '../../../common/mocks/object-models';
import { getCartDetails } from '../services/cart.service';
import store from './index';

const { state, actions } = store;

describe('cart actions', () => {

    it('Should dispatch "getBooksAction" action and commit BOOK_LIST_RESULT mutation', async () => {
        getCartDetails.mockResolvedValue(CART);
        const commit = jest.fn();
        const cart = CART;
        const payload =  {
            cart: CART.cartList[0],
            purpose: 'add'
        };
        await actions.updateCart({ commit, state }, payload);

        expect(getCartDetails).toHaveBeenCalledWith(state.cart.cartList, payload.cart, 'add');
        expect(commit).toHaveBeenCalledWith(SET_CART, CART);
    });

    it('Should dispatch "getBooksAction" action and initialize SET_CART', () => {
        getCartDetails.mockRejectedValueOnce('ERROR');
        const commit = jest.fn();
        const cart = CART;
        const payload =  {
            cart: CART.cartList[0],
            purpose: 'add'
        };
        actions.updateCart({ commit, state }, payload).catch((error) => {
            expect(error).toEqual('ERROR');
            expect(getCartDetails).toHaveBeenCalledWith(state.cart.cartList, payload.cart, 'add');
            expect(commit).toHaveBeenCalledWith(SET_CART, state.cart);

        });
    });

    it('Should dispatch "clearCart" action and initialize SET_CART', () => {
        const commit = jest.fn();
        actions.clearCart({ commit });
    });


});
