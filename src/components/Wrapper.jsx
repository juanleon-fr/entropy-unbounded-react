import React from 'react';
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer';
import HomeHero from './HomeHero'

function Wrapper() {
  return (
    <div className="Wrapper">
      <HomeHero/>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default Wrapper;