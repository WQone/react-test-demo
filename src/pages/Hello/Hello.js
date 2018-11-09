import page from './../../api/page';

import React, { Component } from 'react';

class Hello extends Component {
  state = {
    //定义state
    list: [],
  };
  componentDidMount() {
    page.List().then(res => {
      this.setState({ list: res.data.result });
      console.log(this.state.list, res);
    });
  }
  render() {
    const { list } = this.state;

    return (
      <div>
        {list.map((item, index) => {
          return <li key={index}>{item.keywords}</li>;
        })}
        hello world111!
      </div>
    );
  }
}
export default Hello;
