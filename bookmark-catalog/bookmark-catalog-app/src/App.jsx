// src/App.jsx
import React from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import HomePage from './components/HomePage.jsx'

function App() {
  return (
    <AuthProvider>
      <HomePage/>
    </AuthProvider>
  );
}

export default App;

