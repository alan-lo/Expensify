import getExpenseTotal from '../../selectors/expense_total';
import expenses from '../fixtures/expenses';

test('should return 0 expense', ()=>{
  const res = getExpenseTotal([]);
  expect(res).toBe(0);
})

test('should correctly add single expense', ()=>{
  const res = getExpenseTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);  
})

test('should correctly add multiple expenses', ()=>{
  let total = 0;
  for (let expense of expenses){
    total+=expense.amount;
  }
  expect(getExpenseTotal(expenses)).toBe(total);
})



