// ref: https://umijs.org/config/
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
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        {
          path: '',
          component: './Hello/Hello',
        },
      ],
    },
  ],
  copy: [
    {
      from: './public',
      to: './public',
      ignore: ['.*'],
    },
  ],
  sass: {},
  disableCSSModules: true,
};
