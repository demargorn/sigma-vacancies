import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import store from './app/store/store';
import App from '@/app/App';
import '@/styles/global.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </StrictMode>
);
