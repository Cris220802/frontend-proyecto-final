
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
    'index.csr.html': {size: 4976, hash: '34337d725b9444ee240fcdc5ef1a74eda6bcf8c2ff6d92875f85ff69239831b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'be700869a648136c04e4c4895df40d6d7fad0235476eb310517b3d3ac82d300f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5136, hash: '86d1ca96b78eda0ba33c1ca6bfc522463568e4cfede512dddd93138670315655', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 15094, hash: 'ee8b6b02d05350ab9476a7cf663093da6646404a7fa012cabe010182c7a96b28', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'records/index.html': {size: 5136, hash: '86d1ca96b78eda0ba33c1ca6bfc522463568e4cfede512dddd93138670315655', text: () => import('./assets-chunks/records_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 15336, hash: '412d7eafce397648bb6307b8b9cdc3c5eab175485acc7bb961ed0e5ce1693815', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'creditos/index.html': {size: 5136, hash: '86d1ca96b78eda0ba33c1ca6bfc522463568e4cfede512dddd93138670315655', text: () => import('./assets-chunks/creditos_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
