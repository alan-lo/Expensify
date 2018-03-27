import React from 'react';
import {BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = ()=>{
return (
  <BrowserRouter>
    <div>
    <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpense}/>
      <Route path="/help" component={Help}/> 
      <Route component={NotFoundPage}/>   
    </Switch>
    </div>
  </BrowserRouter>
  );
}

export default AppRouter;