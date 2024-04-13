import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import TermsAndConditions from './components/TermsAndConditions';
import AccountButton from './components/AccountButton';
import App from './App'; // Importing App from './App'
// import Index from './index'; // Importing Index from './index'

function MainApp() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LeftSide />
            <SignupForm />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="/account">
            <AccountButton />
          </Route>
          {/* Define routes for other components */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
