const expenseReducerDefaultState= [];
//Expense Reducer
const expensesReducer = (state = expenseReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    break;
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id!==action.id);
    break;
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if (expense.id == action.id){
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    break;
    default:
    return state;
  } 
}

export default expensesReducer;