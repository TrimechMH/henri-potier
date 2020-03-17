import MainLayout from '../../common/layout/Main';
import Catalogue from './views/Catalogue';
import CatalogueDetails from './views/CatalogueDetails';

export default [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'catalogue',
                component: Catalogue,
            },
            {
                path: '/details',
                name: 'details',
                component: CatalogueDetails,
            }
        ]
    },
];



