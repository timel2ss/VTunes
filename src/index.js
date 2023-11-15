import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import {Provider} from 'react-redux';

//redux store
const store = configureStore({reducer : rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
