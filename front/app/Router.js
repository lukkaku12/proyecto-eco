import { DashboardLayoutPublic } from './components/layout/public/layout';
import { DashboardLayout } from './components/layout/private/dashboard/dashboard-layout';
import { verifyUserToken } from './api/api';
import { routes } from './helpers/routes';

export async function verifyToken(token) {
  try {
    const data = await verifyUserToken(token);
    return [data.valid, data];
  } catch (error) {
    console.error('Token verification failed:', error);
    return [false, { message: error.message }];
  }
}

export function navigateTo(path) {
  window.history.pushState({}, '', window.location.origin + path);
  const publicRoute = routes.public.find((r) => r.path === path);

  if (publicRoute) {
    const params = new URLSearchParams(window.location.search);
    const { pageContent, logic } = publicRoute.component(params);
    DashboardLayoutPublic(pageContent, logic);
    return;
  }

  Router();
}

async function checkAuth(path, params) {
  const token = localStorage.getItem('token');

  if (!token) {
    navigateTo('/login');
    return;
  }

  const [isValid] = await verifyToken(token);
  if (!isValid) {
    localStorage.removeItem('token');
    navigateTo('/login');
    return;
  }

  const privateRoute = routes.private.find((r) => r.path === path);
  if (!privateRoute) {
    navigateTo('/dashboard');
    return;
  }

  const { pageContent, logic } = privateRoute.component(params);
  DashboardLayout(pageContent, logic);
}

export async function Router() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  const publicRoute = routes.public.find((r) => r.path === path);
  const privateRoute = routes.private.find((r) => r.path === path);

  if (publicRoute) {
    const { pageContent, logic } = publicRoute.component(params);
    DashboardLayoutPublic(pageContent, logic);
    return;
  }

  if (privateRoute) {
    await checkAuth(path, params);
    return;
  }

  navigateTo('/home-page');
}

window.onpopstate = Router;
