import { Layout,Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './home.css'
import { useState } from 'react';

const { Content,Header } = Layout;

const onTabHandle = () => {}

function Home(props) {
  const [currentTap,setCurrentTap] = useState('1')
  return (
    <Layout className="Layout">
      <Header className="Header">
        <div style={{color:'white' ,paddingRight: 20}}>VBSAP</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Function</Menu.Item>
          <Menu.Item key="2">A101</Menu.Item>
          <Menu.Item key="3">A102</Menu.Item>
          <Menu.Item key="4">Auditorium</Menu.Item>
        </Menu>
      </Header>
      <Content className="Content">
        {props.children}
      </Content>
    </Layout>
  );
}

export default Home;
