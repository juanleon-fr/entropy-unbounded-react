import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer';
import HomeHero from './HomeHero';
import ItemCount from './ItemCount';

function Wrapper() {
  return (
    <div className="Wrapper">
      <NavBar />
      <HomeHero/>
      <ItemListContainer/>
    </div>
  );
}

export default Wrapper;