import store from './index';
import { BOOK_LIST_RESULT } from './mutations.types';
import { MOCK_BOOK_RESULT_LIST } from '../../../common/mocks/object-models';

const { mutations, state } = store;

describe('shopping mutations', () => {

    it('SET BOOK_LIST_RESULT', () => {
        expect(state.bookListResult).toEqual([]);
        mutations[BOOK_LIST_RESULT](state, MOCK_BOOK_RESULT_LIST);
        expect(state.bookListResult).toEqual(MOCK_BOOK_RESULT_LIST);
    });

    it('SET Book Selected', () => {
        expect(state.bookSelected).toEqual({});
        mutations.setBookSelected(state, MOCK_BOOK_RESULT_LIST[0]);
        expect(state.bookSelected).toEqual(MOCK_BOOK_RESULT_LIST[0]);
        expect(typeof state.bookSelected).toEqual('object');
    });

    it('SET Search Value', () => {
        expect(state.searchValue).toEqual(null);
        mutations.setSearchValue(state, 'TEST');
        expect(state.searchValue).toEqual('TEST');
        expect(typeof state.searchValue).toEqual('string');
    });
});

