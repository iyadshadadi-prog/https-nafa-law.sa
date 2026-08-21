import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log(
  "%cشركة نفع للمحاماة والاستشارات القانونية",
  "color: #1a365d; font-size: 24px; font-weight: bold; font-family: 'Tajawal', sans-serif; padding: 10px;"
);
console.log(
  "%cنحن هنا لحماية حقوقك ومصالحك باحترافية وموثوقية.",
  "color: #bfa15f; font-size: 16px; font-family: 'Tajawal', sans-serif; padding: 5px;"
);
console.log("للتواصل: nafa.law.firm@gmail.com | 056 887 4304");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
