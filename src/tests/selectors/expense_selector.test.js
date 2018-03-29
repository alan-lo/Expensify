import getVisibleExpenses from '../../selectors/expense_selector';
import moment from 'moment';

const expenses = [
{
  id: 1,
  description: 'gas',
  note: '',
  amount: 123,
  createdAt: 0
},
{
  id: 2,
  description: 'coffee',
  note: '',
  amount: 1232,
  createdAt: moment(0).subtract(5,'days').valueOf()
},
{
  id: 3,
  description: 'rent',
  note: '',
  amount: 12,
  createdAt: moment(0).add(4,'days').valueOf()
}
]

test('should filter text value', ()=>{
  const filter = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filter);
  expect(result).toEqual([
    expenses[2],
    expenses[1]
  ]);
})


test('should filter by start date', ()=>{
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filter);
  expect(result).toEqual([
    expenses[2],
    expenses[0]
  ]);

})

test('should filter by end date', ()=>{
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = getVisibleExpenses(expenses, filter);
  expect(result).toEqual([
    expenses[0],
    expenses[1]
  ]);

})

test('should sort by date', ()=>{
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filter);
  expect(result).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ]);
})

test('should sort by amount', ()=>{
  const filter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = getVisibleExpenses(expenses, filter);
  expect(result).toEqual([
    expenses[1],
    expenses[0],
    expenses[2]
  ]);
})