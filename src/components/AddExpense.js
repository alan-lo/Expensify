import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props)=>{
  console.log(props);
  return(
    <div>
      <h2>Add Expense Page</h2>
      <ExpenseForm />
    </div>
  );
}

export default AddExpense;
