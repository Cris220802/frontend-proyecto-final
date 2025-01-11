
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/records"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/creditos"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 4976, hash: 'cf5f0577b4c38f946d5cc498c6aa30f087cae68d01bbb719ec4f51e0e414229c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'b6bd668ee47037cb33158b7f4859e647c6b32fb86f85c362350389dd50bb61db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5136, hash: '14547416e0d1620859d9523a0c7d04be47bd957e32f93ebde0e095ddaf629577', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'records/index.html': {size: 5136, hash: '14547416e0d1620859d9523a0c7d04be47bd957e32f93ebde0e095ddaf629577', text: () => import('./assets-chunks/records_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 15336, hash: '9b446ad7eec98e533112f6c10b45150f186eb345a43eeb8ff27e5b75be6d9508', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'creditos/index.html': {size: 5136, hash: '14547416e0d1620859d9523a0c7d04be47bd957e32f93ebde0e095ddaf629577', text: () => import('./assets-chunks/creditos_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 15094, hash: 'c529b24cac3c8ebeff149aaaeab6156f9c3071a93ff70a552ecf964986a1541d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
