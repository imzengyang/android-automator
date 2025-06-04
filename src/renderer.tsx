import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/reset.css';
import { Button } from 'antd';

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Android Automator</h1>
    <Button type="primary">Connect</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
