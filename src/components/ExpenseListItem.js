import React from 'react';

const ExpenseListItem = ({description, amount, createdAt})=>{
  return (
    <div>
      {description && <h3>{description}</h3>}
      {amount && <p>Amount: {amount}</p>}
      {createdAt && <p>CreatedAt: {createdAt}</p>}
    </div>
  );
};

export default ExpenseListItem;