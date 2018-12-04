import page from '../../api/page';

import React, { Component } from 'react';
import { Table } from 'antd';

export default class Hello extends Component {
  state = {
    //定义state
    list: [],
  };
  // constructor() {}
  componentWillMount() {
    console.log('componentWillMount控件渲染前触发');
  }
  componentDidMount() {
    // 一般在此方法内数据请求-相当于mounted
    console.log('componentDidMount控件渲染后触发');
    page.List().then(res => {
      this.setState({ list: res.data.result.list });
      console.log(res.data.result);
    });
  }
  render() {
    const { list } = this.state;
    console.log('render渲染控件的方法');
    const columns = [
      {
        title: '姓名121212',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
      },
    ];

    return (
      <div>
        <Table rowKey="id" dataSource={list} columns={columns} />
      </div>
    );
  }
}
