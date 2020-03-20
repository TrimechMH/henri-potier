import Vue from 'vue';
import * as _ from 'lodash';

const getCartDetails = async (cartList, cartToBeAdded, purpose) => {
    cartList = _UpdateCartListAndQuantity(cartList, cartToBeAdded, purpose);
    if (cartList.length > 0) {
        try {
            const offers = await getCommercialOffersService(cartList);
            const {totalPrice, bestOffer} = _formatResponse(cartList, offers);
            return {cartList, totalPrice, bestOffer};
        } catch (error) {
            return Promise.reject(new Error('An error during update cart list ! ' + error));
        }
    } else {
        return Promise.reject(new Error('Nothing to be removed | added !'));
    }
};

const getCommercialOffersService = async (cartList) => {
    try {
        const response = await Vue.http.get(`http://henri-potier.xebia.fr/books/${_.map(cartList, 'isbn')}/commercialOffers`);
        return response.body.offers;
    } catch (error) {
        return Promise.reject(new Error(error));
    }
};

const _calculateBestOffer = (totalPrice, offers) => {
    const proposedOffers = [];
    offers.forEach((offer) => {
        if (offer.type === 'percentage') {
            offer.proposedOffer = totalPrice - (totalPrice * offer.value / 100);
            proposedOffers.push(offer);
        } else if (offer.type === 'minus') {
            offer.proposedOffer = totalPrice - offer.value;
            proposedOffers.push(offer);
        }
        else if (offer.type === 'slice') {
            const slices = Math.floor(totalPrice / offer.sliceValue);
            offer.proposedOffer = totalPrice - slices * offer.value;
            proposedOffers.push(offer);
        }
    });
    return _.minBy(proposedOffers, 'proposedOffer');
};

const _UpdateCartListAndQuantity = (cartList, cartToBeAdded, purpose) => {
    const fetchPredicate = {isbn: cartToBeAdded.isbn};
    if (purpose === 'remove') {
        _.remove(cartList, fetchPredicate);
    } else if (purpose === 'add') {
        const cart = _.find(cartList, fetchPredicate);
        if (cart) {
            cart.quantity = Number(cart.quantity) + Number(cartToBeAdded.quantity);
        } else {
            cartList.push(cartToBeAdded);
        }
    }

    return cartList;
};

const _formatResponse = (cartList, offers) => {
    const totalPrice = _.sum(_.map(cartList, (cart) => {
        return cart.price * cart.quantity;
    }));
    const bestOffer = _calculateBestOffer(totalPrice, offers);
    return {totalPrice, bestOffer};
};

export {
    getCartDetails
};
