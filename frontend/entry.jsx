import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllStationsAPI} from './util/bart_api.js';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import $ from 'jquery';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
  window.fetchAllStationsAPI = fetchAllStationsAPI;
  window.$ = $;
});
