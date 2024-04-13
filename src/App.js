// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import TermsAndConditions from './components/TermsAndConditions';
import AccountButton from './components/AccountButton';
import MainApp from './App'; // You don't need to import MainApp here anymore
import Index from './index';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="/account">
            <AccountButton />
          </Route>
          <Route path="/app">
            <MainApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
