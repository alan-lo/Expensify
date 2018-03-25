import React from 'react';
import ReactDOM from 'react-dom';
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
store.dispatch(setTextFilter('bill'));

ReactDOM.render( <AppRouter/>, document.getElementById('app'));



