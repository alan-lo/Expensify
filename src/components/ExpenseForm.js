import React , {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component{
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    focused: false
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

  render(){
    return(
      <div>
        <form>
        <input 
          type="text" 
          placeholder="description" 
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          type="text" 
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
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