import moment from 'moment';

const expenses = [
  {
    id: 1,
    description: 'gas',
    note: '',
    amount: 123,
    createdAt: 0
  },
  {
    id: 2,
    description: 'coffee',
    note: '',
    amount: 1232,
    createdAt: moment(0).subtract(5,'days').valueOf()
  },
  {
    id: 3,
    description: 'rent',
    note: '',
    amount: 12,
    createdAt: moment(0).add(4,'days').valueOf()
  }
  ]
  export default expenses;