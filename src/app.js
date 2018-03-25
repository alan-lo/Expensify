import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses_action';
import {setTextFilter} from './actions/filters_action';
import getVisibleExpenses from './selectors/expense_selector';

const store = configureStore();


store.subscribe(()=>{
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(visible);
})

store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(setTextFilter('gas'));

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(jsx , document.getElementById('app'));



