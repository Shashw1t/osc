// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import TermsAndConditions from './components/TermsAndConditions';
// import AccountButton from './components/AccountButton';
// import Index from './index';
// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route exact path="/" element={<Index />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//           <Route path="/account" element={<AccountButton />} />
//           {/* Define routes for other components */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;]






// App.js
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
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
