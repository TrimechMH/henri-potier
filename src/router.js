// Import Dependency
import VueRouter from 'vue-router';


// Import routes pages
import { shoppingRoutes, cartRoutes} from './modules/routes';

const createRouter = () => {

	const baseRoutes = [
		{
			path: '*',
			redirect: {name: 'home'},
		}
	];

	const routes = baseRoutes.concat(
		baseRoutes,
        shoppingRoutes,
        cartRoutes
	);

	return new VueRouter({
		history: true,
		routes: routes,

	});
};


export {
	createRouter
}
