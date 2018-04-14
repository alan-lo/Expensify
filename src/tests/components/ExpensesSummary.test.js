import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('render correctly expenses summary with one expense', ()=> {
 const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123.22}/>);
 expect(wrapper).toMatchSnapshot();
})


test('render correctly expenses summary with multiple expenses', ()=>{
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={223.22}/>);
  expect(wrapper).toMatchSnapshot();
})