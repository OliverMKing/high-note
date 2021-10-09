import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-8 text-gray-800 text-center">
        <h1 className="text-8xl">🎮🎼</h1>
        <h1 className="text-8xl">High Note</h1>
        <p className="text-3xl mt-2">Sync music to your game</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}
