// src/components/LoginComponent.jsx
import React, { useState } from 'react';
import { supabase } from '../api/supabaseClient'; // Import Supabase client
import { useAuth } from '../context/AuthContext.jsx'; // Import useAuth from context

function LoginComponent(props) {
  const { session, user } = useAuth(); // Access session and user from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null); // Reset error on new login attempt

    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message + ".If account is created, make sure it is signup is confirmed."); // Show error message if login fails
    } else {
      console.log('Logged in as:', user);
      props.changeView();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
        </div>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default LoginComponent;
