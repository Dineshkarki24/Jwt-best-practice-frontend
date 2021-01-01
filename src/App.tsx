import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Redirect, Route,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import { UseAuthContext } from './hooks/useStoreToken';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Dashboard} />
        </Switch>
     
    </div>
  );
}

export default App;
