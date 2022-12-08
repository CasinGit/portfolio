import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/layout';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigProvider theme={{
    token: {
      fontFamily: "Noto Sans KR, sans-serif"
    }
  }}>
    <Layout>
      <App />
    </Layout>
  </ConfigProvider>
);