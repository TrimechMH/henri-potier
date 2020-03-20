// Mutation Types
import { SET_CART } from './mutations.types';
import * as api from '../services/cart.service';

const actions = {
    async updateCart(context, payload) {
        try {
            const {cart, purpose} = payload;
            const response = await api.getCartDetails(context.state.cart.cartList, cart, purpose);
            context.commit(SET_CART, undefined);
            context.commit(SET_CART, response);
        } catch (error) {
            context.commit(SET_CART, {
                cartList: [],
                totalPrice: 0,
                bestOffer: {},
            });
        }
    },
    clearCart(context) {
        context.commit(SET_CART, {
            cartList: [],
            totalPrice: 0,
            bestOffer: {},
        });
    }
};

export default actions;
