import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id ,description, amount, createdAt})=>{
  return (
    <div>
      <Link to={`/edit/${id}`}>{description && <h3>{description}</h3>}</Link>
      {<p>Amount: {amount}</p>}
      {<p>CreatedAt: {createdAt}</p>}
    </div>
  );
};

//setup props to have the dispatch function
export default ExpenseListItem;