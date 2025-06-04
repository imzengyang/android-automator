import React from 'react';
import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ color: '#fff', fontSize: 20 }}>Android Automator</Header>
    <Content style={{ padding: 24 }}>
      <Button type="primary">Connect</Button>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Android Automator</Footer>
  </Layout>
);

export default Home;
