import home from '../views/pages/home';
import detail from '../views/pages/detail';
import favorite from '../views/pages/favorite';

const routes = {
  '/': home,
  '/home': home,
  '/detail/:id': detail,
  '/favorite': favorite,
};

export default routes;
