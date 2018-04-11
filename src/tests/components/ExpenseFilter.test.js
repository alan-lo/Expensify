import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {filters , altfilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate    = jest.fn();
  sortByAmount  = jest.fn();
  setStartDate  = jest.fn();
  setEndDate    = jest.fn();
  wrapper       = shallow(
    <ExpenseListFilter
    filters       = {filters}
    setTextFilter = {setTextFilter}
    sortByDate    = {sortByDate}
    sortByAmount  = {sortByAmount}
    setStartDate  = {setStartDate}
    setEndDate    = {setEndDate}
   />);  
})

test('should render expenseListFilter correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
}) 

test('should render expenseListFilter with alt data correctly', ()=>{
  wrapper.setProps({
    filters: altfilters
  })
  expect(wrapper).toMatchSnapshot();
}) 

test('should handle text change', ()=>{
  wrapper.find('input').at(0).prop('onChange')({
    target: {
      value: filters.text
    }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(filters.text);
})

test('should sort by date', ()=>{
  const value = 'date';
  wrapper.find('select').prop('onChange')({
    target: {
      value
    }
  })
  expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', ()=>{
  const value = 'amount';
  wrapper.find('select').prop('onChange')({
    target: {
      value
    }
  })
  expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', ()=>{
  const startDate = moment(0);
  const endDate   = moment(0).add(4, 'months');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus changes', ()=>{
  const focused = 'startDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
  expect(wrapper.state('focused')).toBe(focused);
})