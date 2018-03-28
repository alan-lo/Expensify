import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expense_reducer';
import filtersReducer from '../reducers/filters_reducer';

export default ()=>{
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}