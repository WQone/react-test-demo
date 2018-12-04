import api from './index';

const path = {
  List: '/api/todoList', // 审核列表
};

const List = () => api.post(path.List, {});

export default {
  path,
  List,
};
