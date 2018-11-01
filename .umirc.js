// ref: https://umijs.org/config/
export default {
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
