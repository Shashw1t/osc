import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const TermsAndConditions = () => {
  const [termsAndConditions, setTermsAndConditions] = useState('');

  useEffect(() => {
    async function fetchTermsAndConditions() {
      try {
        const response = await axios.get('/terms-and-conditions');
        setTermsAndConditions(response.data.content);
      } catch (error) {
        console.error('Error fetching terms and conditions:', error);
        // Handle error in fetching terms and conditions
      }
    }
    fetchTermsAndConditions();
  }, []);

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>{termsAndConditions}</p>
      <Link to="/">Back to Signup</Link>
      <Link to="/account">Create Account</Link>
    </div>
  );
};

export default TermsAndConditions;
