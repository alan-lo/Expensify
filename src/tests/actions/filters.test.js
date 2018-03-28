import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters_action';
import moment from 'moment';

test('should setup setTextFilter action object with user-specified value', ()=>{
 const action = setTextFilter('test');
 expect(action).toEqual({
   type: 'SET_TEXT_FILTER',
   text: 'test'
 })
})

test('should setup setTextFilter action object with default value', ()=>{
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
 })

test('should setup sortByAmount action object', ()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
})

test('should setup sortByDate action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
})


test('should setup setStartDate action object', ()=>{
  const now = moment();
  const action = setStartDate(now);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: now
  });
})

test('should setup setEndDate action object', ()=>{
  const now = moment();
  const action = setEndDate(now);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: now
  });
})