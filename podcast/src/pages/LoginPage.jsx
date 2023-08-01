import React, { useState } from 'react';
import { supabase } from '../services/supabase';
import ShowList from './ShowList';

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [shows, setShows] = useState([]);

  const handleLogin = async () => {
    // Use Supabase's authentication to sign in or sign up
    const { user, error } = await supabase.auth.signIn();

    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      // Store the authenticated user in the state
      setUser(user);
      // Fetch shows data from the API and store it in the state
      fetchShows();
    }
  };

  const fetchShows = async () => {
    try {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };

  const handleLogout = async () => {
    // Use Supabase's authentication to sign out
    await supabase.auth.signOut();
    // Clear the user and shows data from the state
    setUser(null);
    setShows([]);
  };

  return (
    <div className="login-page">
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
          {shows.length > 0 ? <ShowList shows={shows} /> : <p>Loading shows...</p>}
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login with Supabase</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
