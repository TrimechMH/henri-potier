import { shallowMount, createLocalVue } from '@vue/test-utils';
import Header from './Header';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);


const router = new VueRouter({
    history: true
});

// Mount the component
const wrapper = shallowMount(Header, {
    localVue,
    router,

});

describe('Header', () => {
    // Inspect the raw component options

    it('Should be created', () => {
        expect(Header).toBeDefined();
        expect(Header.name).toEqual('headerComponent');
    });

});