import { shallowMount, createLocalVue } from '@vue/test-utils';
import Menu from './Menu';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);


const router = new VueRouter({
    history: true
});

// Mount the component
const wrapper = shallowMount(Menu, {
    localVue,
    router
});

describe('Menu', () => {
    // Inspect the raw component options
    it('Should be created', () => {
        expect(Menu).toBeDefined();
        expect(Menu.name).toEqual('menu-component');
    });

});