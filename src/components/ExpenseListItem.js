import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses_action';

const ExpenseListItem = ({dispatch, id ,description, amount, createdAt})=>{
  return (
    <div>
      {description && <h3>{description}</h3>}
      {<p>Amount: {amount}</p>}
      {<p>CreatedAt: {createdAt}</p>}
      <button onClick={()=>{
        dispatch(removeExpense({id}));
      }}>Remove</button>
    </div>
  );
};

//setup props to have the dispatch function
export default connect()(ExpenseListItem);