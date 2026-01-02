import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { auth } from './service/authApi';
// public>index.html div 위치 파악
const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(auth)
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

