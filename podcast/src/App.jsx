import React, { useEffect } from "react";

import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <>
      <LoginPage />
      <Home />
    </>
  );
}

export default App;

