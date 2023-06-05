import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthenticationTitle } from '../features/auth/login';
import { StatsCard } from '../features/process/pjprocess';

function App() {
  return (
   
    <div>
    <div> <StatsCard/> </div>
    <div> <AuthenticationTitle/> </div>
    </div>  
   
  );
}

export default App;
