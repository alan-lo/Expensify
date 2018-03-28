
import moment from 'moment';

const filterReducersDefaultState = {
  text:'',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

//Filter Reducers
const filtersReducer = (state = filterReducersDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return { ...state , text: action.text};
    break;
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: action.sortBy};
    break;
    case 'SORT_BY_DATE':
      return { ...state, sortBy: action.sortBy};
    break;
    case 'SET_START_DATE':
      return {...state, startDate :action.startDate};
    break;
    case 'SET_END_DATE':
      return {...state, endDate :action.endDate};
    break;
    default:
    return state;
  }
}
export default filtersReducer;