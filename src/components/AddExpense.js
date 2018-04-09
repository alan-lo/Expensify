import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses_action';

export class AddExpense extends React.Component{

  onSubmit = (expense)=>{
     this.props.addExpense(expense);
     this.props.history.push('/')
   }

   render(){
    return(
      <div>
        <h2>Add Expense Page</h2>
        <ExpenseForm onSubmit={this.onSubmit}
        />
      </div>
    );
   }
}

const mapDispatchToProps = (dispatch)=> ({
  addExpense : (expense) => {
    dispatch(addExpense(expense))
  }
})

export default connect(undefined, mapDispatchToProps)(AddExpense);
