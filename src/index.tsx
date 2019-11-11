import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { count } from './store/reducer';
import { StoreState } from './store/types';
import { EnthusiasmAction } from './store/actions';
import HelloContainer from './component/HelloContainer'
import { Provider } from 'react-redux';

const store = createStore<StoreState, EnthusiasmAction, any, any>(count, {
  count: 1
});

ReactDOM.render(
  <Provider store={store}>
    <HelloContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
