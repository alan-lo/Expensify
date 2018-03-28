import React from 'react';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses_action';
import {removeExpense} from '../actions/expenses_action';
import {connect} from 'react-redux';

const Edit = (props)=>{
  return(
    <div>
      <ExpenseForm 
        onSubmit={(expense)=>{
          console.log('updated', expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
        expense = {props.expense} 
      />
      <button onClick={()=>{
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
}


const mapStateToProps = (state, props)=>{
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })
  };
}
export default connect(mapStateToProps)(Edit);
