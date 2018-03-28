import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses_action';

const AddExpense = (props)=>{
  return(
    <div>
      <h2>Add Expense Page</h2>
      <ExpenseForm onSubmit={
        (expense)=>{
          props.dispatch(addExpense(expense))
          props.history.push('/')
        }
      }
      />
    </div>
  );
}

export default connect()(AddExpense);
