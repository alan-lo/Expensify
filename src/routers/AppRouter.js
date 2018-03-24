import React from 'react';
import {BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import Edit from '../components/Edit';
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
      <Route path="/help" component={Help}/> 
      <Route component={NotFoundPage}/>   
    </Switch>
    </div>
  </BrowserRouter>
  );
}

export default AppRouter;