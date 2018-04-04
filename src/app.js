import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses_action';
import {setTextFilter} from './actions/filters_action';
import getVisibleExpenses from './selectors/expense_selector';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(()=>{
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(visible);
})

store.dispatch(addExpense({description: 'Water' , amount:1000}));
store.dispatch(addExpense({description: 'Gas', amount:1000, createdAt: 100}));
store.dispatch(addExpense({description: 'Rent',  amount:222000}));

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(jsx , document.getElementById('app'));



