// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import TermsAndConditions from './components/TermsAndConditions';
// import AccountButton from './components/AccountButton';
// import App from './App'; // Correcting the import statement
// import Index from './index'; // Assuming Index is in the same directory

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Switch>
//           <Route exact path="/">
//             <Index />
//           </Route>
//           <Route path="/signup">
//             <SignupForm />
//           </Route>
//           <Route path="/terms-and-conditions">
//             <TermsAndConditions />
//           </Route>
//           <Route path="/account">
//             <AccountButton />
//           </Route>
//           <Route path="/app">
//             <App />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;




// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import TermsAndConditions from './components/TermsAndConditions';
import AccountButton from './components/AccountButton';
import Index from './index'; // Assuming Index is in the same directory

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route exact path="/">
            <Index />
          </Route> */}
          <Route path="/signup">
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
