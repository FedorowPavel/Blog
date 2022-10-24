import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BlogThemeProvider} from "./common/components/hoc/ThemeProvider";
import {Provider} from "react-redux";
import {setupStore} from "./common/store";
import {BrowserRouter} from "react-router-dom";

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BlogThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogThemeProvider>
  </Provider>

);

