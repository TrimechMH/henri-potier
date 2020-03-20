import {
    BOOK_LIST_RESULT
} from './mutations.types';
import * as api from '../services/books.service';

const actions = {
    async getBooksAction(context) {
        try {
            const response = await api.getBooksService();
            context.commit(BOOK_LIST_RESULT, response.body);
            return Promise.resolve(response.body);
        } catch (error) {
            context.commit(BOOK_LIST_RESULT, []);
            return Promise.reject(error);
        }
    },
};

export default actions;
