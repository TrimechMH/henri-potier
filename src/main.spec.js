import { shallowMount, createLocalVue } from '@vue/test-utils';


import setupApp from './main';
import App from './App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
// Mount the component
describe('main', () => {
    // Inspect the raw component options
    it('Should be created', () => {
        const setup = setupApp();
        const wrapper = shallowMount(App, {...setup});
        console.log(wrapper);
        expect(App).toBeDefined();
        expect(App.name).toEqual('app');
    });

});