import {
    BOOK_LIST_RESULT
} from './mutations.types';
import * as api from '../services/books.service';

const actions = {
    getBooksAction(context, payload) {
        return new Promise((resolve, reject) => {
            api.getBooksService(payload)
                .then((response) => {
                    context.commit(BOOK_LIST_RESULT, response.body);
                    resolve(response.body);
                })
                .catch((error) => {
                    context.commit(BOOK_LIST_RESULT, []);
                    reject(error);
                });
        });
    },
};

export default actions;
