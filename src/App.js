import FavoriteIndicator from "./component/FavoriteIndicator";
import Hero from "./component/Hero";
import Likelist from "./component/Likelist";
import List from "./component/List";
import Modal from "./component/Modal";
import Search from "./component/Search";
import { useGlobalContext } from "./context";

function App() {
  const { showFavorite, showModal} = useGlobalContext();
  return (
    <div className="relative">
      {showModal && <Modal />}
      <header>
        <FavoriteIndicator />
        <Search />
        <Hero />
        {showFavorite && <Likelist />}
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
