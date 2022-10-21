import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BlogThemeProvider} from "./common/components/hoc/ThemeProvider";
import {Provider} from "react-redux";
import {setupStore} from "./common/store";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BlogThemeProvider>
      <App />
    </BlogThemeProvider>
  </Provider>

);

