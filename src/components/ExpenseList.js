import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expense_selector';

const ExpenseList = (props)=>{
  return (
    <div>
      <div>Expense List</div>
      {props.expenses.map((expense)=>{
        return (
          <ExpenseListItem key={expense.id} {...expense}/>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state)=>({
  expenses: selectExpenses(state.expenses, state.filters)
})


export default connect(mapStateToProps)(ExpenseList);