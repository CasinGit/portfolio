import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TocContextProvider } from './contexts/toc-context';

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
    <TocContextProvider>
      <Layout>
        <App />
      </Layout>
    </TocContextProvider>
  </ThemeProvider>
);