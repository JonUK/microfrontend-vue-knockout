import { createRouter, createWebHistory } from 'vue-router';

const MarketingApp = () => import('./components/MarketingApp');
const DashboardApp = () => import('./components/DashboardApp');

const routes = [
  // { path: '/dashboard', component: DashboardApp },
  { path: '/dashboard/:pathMatch(.*)*', component: DashboardApp },

  // { path: '/', component: MarketingApp },
  { path: '/:pathMatch(.*)*', component: MarketingApp },
]

const history = createWebHistory();

const router = createRouter({
  history: history,
  routes
});

export default router;
export { history };
