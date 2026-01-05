import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { auth } from './service/authApi';
import ImageUploader from './service/image_upload';
import ImageFileInput from './components/common/ImageFileInput';
const imageUploader = new ImageUploader() 
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)
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

