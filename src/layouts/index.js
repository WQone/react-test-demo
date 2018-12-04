import './index.scss';
import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import menuList from './menu';
import router from 'umi/router';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
    routeName: '',
  };
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    const name = menuList.filter(item => {
      if (item.path === this.props.location.pathname) return item.name;
    });
    this.setState({
      routeName: name[0].name,
    });
    console.log(this.props.location);
    console.log(11, this.state.routeName, name);
  }
  componentWillMount() {}
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  goPath = path => {
    if (this.props.location.pathname !== path) router.push(path);
  };

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {menuList.map((item, index) => {
              return (
                <Menu.Item key={index} onClick={() => this.goPath(item.path)}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {menuList.map((item, index) => {
              if (item.path === this.props.location.pathname) return (<p key={index}>{item.name}</p>);
            })}
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
