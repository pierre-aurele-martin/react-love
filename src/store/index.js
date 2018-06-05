import { createStore } from 'redux';
import reducers from '../reducers/easters';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

let store = createStore(reducers, persistedState);
store.subscribe(() => {
  window.localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
