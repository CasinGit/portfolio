import './App.css';
import { Image } from 'antd';

export default function App() {

  return (
    <div style={{ display: "flex", justifyContent: "start", alignItems: "flex-start", height: "100vh" }}>
      <div style={{ position: "static" }}>
        <Image
          preview={false}
          width={400}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    </div>
  );
}