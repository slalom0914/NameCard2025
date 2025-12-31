import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
// public>index.html div 위치 파악
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

