import Vue from 'vue';
import VueResource from 'vue-resource';

import { getBooksService } from './books.service'
Vue.use(VueResource);

describe('books service ', () =>  {

    it('should get book list', async () => {
        Vue.http.get = jest.fn().mockResolvedValueOnce('response');
        const response = await getBooksService();

        expect(Vue.http.get).toBeCalledWith('http://henri-potier.xebia.fr/books');
        expect(response).toEqual('response');
    });

    it('should reject get book list', () => {
        Vue.http.get = jest.fn().mockRejectedValueOnce('ERROR');
        getBooksService().catch((error) => {
            expect(Vue.http.get).toBeCalledWith('http://henri-potier.xebia.fr/books');
            expect(error).toEqual('ERROR');
        });
    });
});



