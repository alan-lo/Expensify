import React , {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates';

class ExpenseForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description: '',
      note: props.expense ? props.expense.note: '',
      amount: props.expense ? (props.expense.amount/ 100).toString(): '',
      createdAt: props.expense? moment(props.expense.createdAt): moment(),
      focused: false,
      error: ''
    }   
  }
  
  onDescriptionChange = (e)=>{
    const description = e.target.value;
    this.setState((prevState)=>({description}))
  }

  onNoteChange = (e)=>{
    const note = e.target.value; 
    this.setState((prevState)=>({note}));
  } 

  onAmountChange= (e)=>{
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState((prevState)=>({amount}));
    }
  }

  onDateChange=(createdAt)=>{
    if (createdAt){
      this.setState(()=>({createdAt}));
    }
  }

  onFocusChange=({focused})=>{
    this.setState(()=>({focused}));   
  }

  onSubmitForm = (e)=>{
    e.preventDefault();

    if (!this.state.description || !this.state.amount){
      this.setState(()=>({
        error:'Please provide description and amount.'
      }))
    }else{
      this.setState(()=>({
        error:''
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitForm}>
        <input 
          type="text" 
          placeholder="description" 
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          name="description"
        />
        <input 
          type="text" 
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          name="amount"
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange} 
          focused={this.state.focused} 
          onFocusChange={this.onFocusChange}
          numberOfMonths={1} 
          isOutsideRange={()=> false}
        />
        <textarea 
          placeholder="Note"
          value= {this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>

        <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;