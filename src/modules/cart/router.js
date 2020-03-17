import MainLayout from '../../common/layout/Main';
import Cart from './views/Cart';

export default [
    {
        path: '/cart',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'cart',
                component: Cart,
            }
        ]
    }
];



