import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>api-checkpoint</h1>
      <UserList />
    </div>
  );
}

export default App;
