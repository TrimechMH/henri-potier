import { Store } from 'vuex';

// vuex store modules
import globalStore from './common/store';

import {
	shoppingStore,
    cartStore
} from './modules/stores';

let store;

const plugins = [];

const createStore = () => {
	const newStore = new Store({
		plugins,
		modules: {
			globalStore,
            shoppingStore,
            cartStore
		}
	});
	store = newStore;
	return newStore;
};

export {
	createStore,
	store
};
