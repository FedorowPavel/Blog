import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BlogThemeProvider} from "./common/components/hoc/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BlogThemeProvider>
    <App />
  </BlogThemeProvider>
);

