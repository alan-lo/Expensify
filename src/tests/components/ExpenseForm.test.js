import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form',()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render expense form with data',()=>{
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render error message for invalid submission',()=>{
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', ()=>{
  const value = 'new description';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(0).simulate('change', {target:{ value }});
  expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', ()=>{
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm/>);  
  wrapper.find('textarea').simulate('change', {target: {value}});
  expect(wrapper.state('note')).toBe(value);
})

test('should set valid amount on input change', ()=>{
  const value = '123.2222';
  const wrapper = shallow(<ExpenseForm/>); 
  wrapper.find('input').at(1).simulate('change',  {target: {value}}); 
  expect(wrapper.state('amount')).toBe('');
})

test('should not set invalid amount on input change', ()=>{

})