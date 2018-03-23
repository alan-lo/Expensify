import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const ExpenseDashboardPage = ()=>{
  return(
    <div>Dashboard</div>
  );
}

const AddExpense = ()=>{
  return(
    <div>Add Expense Page</div>
  );
}

const Edit = ()=>{
  return(
    <div>Edit Page</div>
  );
}

const Help = ()=>{
  return(
    <div>Help Page</div>
  );
}

const NotFoundPage = ()=>{
  return(
    <div>404!</div>
  );
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpense} />
      <Route path="/edit" component={Edit}/>
      <Route path="/help" component={Help}/> 
      <Route component={NotFoundPage}/>   
    </Switch>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app'));



