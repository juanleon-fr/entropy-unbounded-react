import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Wrapper'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/item/:routingtitle' element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;