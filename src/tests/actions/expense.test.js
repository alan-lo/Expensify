import {addExpense, editExpense, removeExpense} from '../../actions/expenses_action';

test('Should setup remove expense action object', ()=>{
  const action = removeExpense({id: '12adfas'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12adfas'
  });
})

test('Should setup edit expense action object',()=>{
  const action = editExpense(123, {note:'abc'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 123,
    updates: {
      note: 'abc'
    }
  });
})

test('should setup add expense action object with default value', ()=>{
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})

test('should add expense action object with user specified value', ()=>{
  const user = {
    description: 'des',
    note: 'note',
    amount: 100,
    createdAt: 101
  };
  const action = addExpense(user);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...user,
    }
  });
})
