import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer';
import HomeHero from './HomeHero';
import ItemDetailContainer from './ItemDetailContainer';

function Wrapper() {
  return (
    <div className="Wrapper">
      <NavBar />
      <HomeHero />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default Wrapper;