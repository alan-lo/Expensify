import filtersReducer from '../../reducers/filters_reducer';
import moment from 'moment';

test('should setup set state with default value', ()=>{
  const state = filtersReducer(undefined, {type: '@@type'});
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', ()=>{
  const action = {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', ()=>{
  const action = {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'date'
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('date')
})

test('should set startend filter', ()=>{
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
})

test('should set endDate filter', ()=>{
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate)
})

test('should set text filter', ()=>{
  const text = 'this is testing';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
})