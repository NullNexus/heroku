// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import App from '../components/App';
import Home from './Home';

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Sync/aboutRoute').default,
        require('./Sync/frasierRoute').default,
      ]);
    });
  },
  indexRoute: {
    component: Home,
  },
};

