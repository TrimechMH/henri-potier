jest.mock('../services/books.service');
import { BOOK_LIST_RESULT } from './mutations.types';
import { MOCK_BOOK_RESULT_LIST } from '../../../common/mocks/object-models';
import { getBooksService } from '../services/books.service';
import store from './index';

const { actions } = store;

describe('shopping actions', () => {

    it('Should dispatch "getBooksAction" action and commit BOOK_LIST_RESULT mutation', async () => {
        getBooksService.mockResolvedValueOnce({ body: MOCK_BOOK_RESULT_LIST });
        const commit = jest.fn();

        const response = await actions.getBooksAction({ commit });

        expect(response).toEqual(MOCK_BOOK_RESULT_LIST);
        expect(getBooksService).toHaveBeenCalled();
        expect(commit).toHaveBeenCalledWith(BOOK_LIST_RESULT, MOCK_BOOK_RESULT_LIST);
    });

    it('Should dispatch "getBooksAction" action and initialize BOOK_LIST_RESULT', () => {
        getBooksService.mockRejectedValueOnce('ERROR');
        const commit = jest.fn();

        actions.getBooksAction({ commit }).catch((error) => {
            expect(error).toEqual('ERROR');
            expect(getBooksService).toHaveBeenCalled();
            expect(commit).toHaveBeenCalledWith(BOOK_LIST_RESULT, []);
        });
    });

});
