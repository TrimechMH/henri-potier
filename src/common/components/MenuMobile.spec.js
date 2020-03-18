import { shallowMount, createLocalVue } from '@vue/test-utils';
import MenuMobile from './MenuMobile';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);


const router = new VueRouter({
    history: true
});

// Mount the component
const wrapper = shallowMount(MenuMobile, {
    localVue,
    router
});

describe('MenuMobile', () => {
    // Inspect the raw component options
    it('Should be created', () => {
        expect(MenuMobile).toBeDefined();
        expect(MenuMobile.name).toEqual('menu-mobile-component');
    });

});