import React from 'react';
import './App.css';
import Home from './pages/HomePage';

// Here we would use the route component for routing if we would have multiple pages
// The route component it would be located in a folder called "routes"
// Example: AuthenticatedRoutes, NonAuthenticatedRoutes, etc

function App() {
  return (
    <Home />
  );
}

export default App;
