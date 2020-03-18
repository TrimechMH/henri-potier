import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from './App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

// Mount the component
const wrapper = shallowMount(App, {
    localVue,
    router
});

describe('App', () => {
    // Inspect the raw component options
    it('Should be created', () => {
        expect(typeof App).toBeDefined();
        expect(App.name).toEqual('app');
    });
});