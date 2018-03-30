import expensesReducer from '../../reducers/expense_reducer';
import moment from 'moment';
import {expenses} from '../fixtures/expenses';

test('should set default case', ()=>{
 const state =  expensesReducer(undefined, {type: '@@type'});
 expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state =  expensesReducer(expenses, action)
  expect(state).toEqual( [
    expenses[1],
    expenses[2]    
  ]);
})

test('should not remove expense if id is not found', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '50'
  }
  const state =  expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})

test('should add new expense', ()=>{
  const expense = {
    id: '102',
    description: 'abc',
    note: 'note',
    amount: 1234,
    createdAt: moment()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state =  expensesReducer(expenses, action)
  expect(state).toEqual( [
    ...expenses,
    expense    
  ]);
})

test('should edit expense by id', ()=>{
  const updates = {
    description: 'abc',
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id:'3',
    updates
  }
  const state =  expensesReducer(expenses, action)
  expect(state[2].description).toBe('abc');
})

test('should not edit expense by id', ()=>{
  const updates = {
    description: 'abc',
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id:'-22',
    updates
  }
  const state =  expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})
