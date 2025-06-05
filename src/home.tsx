import React, { useState } from 'react';
import { Layout, Button, Descriptions, message } from 'antd';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  const [info, setInfo] = useState<{ model?: string; version?: string } | null>(null);

  const handleConnect = async () => {
    const result = await (window as any).api.getDeviceInfo();
    if (result.error) {
      message.error(result.error);
    } else {
      setInfo(result);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: '#fff', fontSize: 20 }}>Android Automator</Header>
      <Content style={{ padding: 24 }}>
        <Button type="primary" onClick={handleConnect}>Connect</Button>
        {info && (
          <Descriptions title="Device Info" style={{ marginTop: 24 }}>
            <Descriptions.Item label="Model">{info.model}</Descriptions.Item>
            <Descriptions.Item label="Android Version">{info.version}</Descriptions.Item>
          </Descriptions>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Android Automator</Footer>
    </Layout>
  );
};

export default Home;
