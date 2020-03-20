import Vue from 'vue';
import VueResource from 'vue-resource';
import * as _ from 'lodash';

import { getCartDetails } from './cart.service'
import { CART, MOCK_BOOK_RESULT_LIST, MOCK_OFFERS } from '../../../common/mocks/object-models';
Vue.use(VueResource);

describe('books service ', () =>  {

    it('should reject get book list without calling Vue.http', () => {
        Vue.http.get = jest.fn().mockRejectedValueOnce('ERROR');
        getCartDetails([], MOCK_BOOK_RESULT_LIST[1], 'test').catch((error) => {
            expect(Vue.http.get).not.toBeCalled();
            expect(error.toString()).toEqual('Error: Nothing to be removed | added !');
        });
    });

    it('should get cart details & best offer after adding new cart', async () => {
        Vue.http.get = jest.fn().mockResolvedValueOnce({body: MOCK_OFFERS});
        const response = await getCartDetails(CART.cartList, {...MOCK_BOOK_RESULT_LIST[1], quantity: 12}, 'add');

        expect(Vue.http.get).toBeCalledWith(
            `http://henri-potier.xebia.fr/books/${CART.cartList[0].isbn},${MOCK_BOOK_RESULT_LIST[1].isbn}/commercialOffers`
        );
        expect(response.bestOffer.proposedOffer).toEqual(359);
        expect(response.bestOffer.type).toEqual('slice');
        expect(response.cartList.length).toEqual(2);
        expect(response.cartList[0].quantity).toEqual(1);
        expect(response.cartList[1].quantity).toEqual(12);
        expect(response.totalPrice).toEqual(395);
    });

    it('should get cart details & best offer after removing a cart', async () => {
        Vue.http.get = jest.fn().mockResolvedValueOnce({body: MOCK_OFFERS});
        const response = await getCartDetails(CART.cartList, CART.cartList[0], 'remove');

        expect(Vue.http.get).toBeCalledWith(
            `http://henri-potier.xebia.fr/books/${MOCK_BOOK_RESULT_LIST[1].isbn}/commercialOffers`
        );
        expect(response.bestOffer.proposedOffer).toEqual(324);
        expect(response.bestOffer.type).toEqual('slice');
        expect(response.cartList.length).toEqual(1);
        expect(response.cartList[0].quantity).toEqual(12);
        expect(response.totalPrice).toEqual(360);
    });

     it('should reject get book list if http catch', () => {
       Vue.http.get = jest.fn().mockRejectedValueOnce('ERROR');
       getCartDetails(CART.cartList, {...MOCK_BOOK_RESULT_LIST[1], quantity: 12}, 'add').catch((error) => {
           expect(Vue.http.get).toBeCalledWith(
               `http://henri-potier.xebia.fr/books/${MOCK_BOOK_RESULT_LIST[1].isbn}/commercialOffers`
           );
           expect(error.toString()).toEqual('Error: An error during update cart list ! Error: ERROR');
       });
   });

});



