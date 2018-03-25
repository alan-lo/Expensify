
const getVisibleExpenses = (expenses, {text, sortBy ,startDate, endDate})=>{
  // return expenses;  
  // console.log(expenses , text, startDate, endDate );
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch   = typeof endDate   !=='number' || expense.createdAt <= endDate; 
    const regStr = new RegExp(`.*${text}.*`,'i');
    const textMatch = expense.description.match(regStr);
    return startDateMatch && endDateMatch && textMatch;  
  }).sort((firstExp, secondExp)=>{
      if (sortBy == 'date'){
        return firstExp.createdAt > secondExp.createdAt ? 1: -1;
      }else if (sortBy == 'amount') {
        return firstExp.amount < secondExp.amount ? 1 : -1;
      }
  });
}

export default getVisibleExpenses;