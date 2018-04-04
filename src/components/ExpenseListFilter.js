import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {setTextFilter, sortByAmount , sortByDate, setEndDate, setStartDate} from '../actions/filters_action';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';



class ExpenseListFilter extends Component {
  state = {
    focused: null
  }

  onDateChange = ({startDate, endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (focused)=>{
    this.setState(()=>({focused}))
  }

  render(){
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text}
          onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value)); 
          }} 
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e)=>{
          if (e.target.value == 'date'){
            this.props.dispatch(sortByDate());
          }else if (e.target.value =='amount'){
            this.props.dispatch(sortByAmount());
          }
        }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} 
          startDateId='start'
          endDate={this.props.filters.endDate} 
          endDateId='end'        
          onDatesChange={this.onDateChange} 
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange} 
          numberOfMonths={1}
          isOutsideRange={()=>false}
          showClearDates={true}
        />
      </div>
    );
  }

}

const mapStateToProps = (state)=>{
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpenseListFilter);