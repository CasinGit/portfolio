import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Mui Components CSS
  components: {},
  // Global CSS
  typography: {
    fontFamily: "Noto Sans KR, sans-serif"
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme} >
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
);