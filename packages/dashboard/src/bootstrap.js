import { createApp } from 'vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard';
import About from './components/About';
import App from './App';

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/dashboard/about', component: About },
]

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory();

  if (initialPath) {
    history.push(initialPath);
  }

  const router = createRouter({
    history: history,
    routes,
    initialPath: initialPath
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  const app = createApp(App);
  app.use(router);
  app.mount(el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        console.log('onParentNavigate called from container app', nextPathname);
        history.push(nextPathname);
      }
    }
  };
}

// If we are in development and in isolation then call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createWebHistory() });
  }
}

export { mount };
