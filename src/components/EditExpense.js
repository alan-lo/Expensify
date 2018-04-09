import React from 'react';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses_action';
import {connect} from 'react-redux';

export class Edit extends React.Component{

  onSubmitEdit = (expense) => {
    console.log('updated', expense);
    this.props.editExpense(this.props.expense.id , expense);
    this.props.history.push('/');
  }

  onClickRemove = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <ExpenseForm 
          onSubmit={this.onSubmitEdit}
          expense = {this.props.expense} 
        />
        <button onClick={this.onClickRemove}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=> ({
  removeExpense : (expense) => {
    dispatch(removeExpense({id: expense.id}))
  }
  ,
  editExpense : (id, expense) => {  
    dispatch(editExpense(id ,expense))
  }
})

const mapStateToProps = (state, props)=>{
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
