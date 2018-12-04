import mockjs from 'mockjs';
const init = () => {
  mockjs.mock(/\/todoList/, {
    code: 0,
    result: {
      'list|1-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          title: '@name',
          'age|1-100': 100,
          address: '@province',
          date: '@datetime',
        },
      ],
    },
    message: '操作成功',
    systemDate: new Date().getTime(),
  });
};
export default init;
