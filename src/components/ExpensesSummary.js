import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expense_total';
import selectExpenses from '../selectors/expense_selector';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    const formattedExpensesTotal = numeral(expensesTotal/ 100).format('$0,0.00')
    return (
      <div>
        <h3>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h3>
      </div>
    );
}

const mapStateToProps = (state) => {
  const getVisbleExpense = selectExpenses(state.expenses, state.filters);
  return {
     expensesTotal: selectExpensesTotal(getVisbleExpense),
     expenseCount: getVisbleExpense.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);