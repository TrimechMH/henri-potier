import { shallowMount, createLocalVue } from '@vue/test-utils';


import setupApp from './main';
import App from './App.vue';

// Mount the component
describe('main', () => {
    // Inspect the raw component options
    it('Should be created', () => {
        const setup = setupApp();
        const wrapper = shallowMount(App, {...setup});
        expect(App).toBeDefined();
        expect(App.name).toEqual('app');
    });

});