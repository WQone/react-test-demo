// ref: https://umijs.org/config/
// const myRoute = require('./src/layouts/menu');
// console.log('myRoute', myRoute);
const routesList = [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: './Hello/Hello',
        name: '首页',
      },
      {
        path: '/Welcome',
        component: './Welcome/Welcome',
        name: '欢迎页',
      },
    ],
  },
];
export default {
  publicPath: './',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'react-test-demo',
        dll: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  history: 'hash',
  routes: routesList,
  copy: [
    {
      from: './public',
      to: './public',
      ignore: ['.*'],
    },
  ],
  manifest: {
    basePath: '/',
  },
  sass: {},
  disableCSSModules: true,
  chainWebpack(config, { webpack }) {
    // 设置 alias
    // config.resolve.alias.set('@', './src');
  },
};
