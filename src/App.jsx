import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer prop1="hola" />
    </div>
  );
}

export default App;