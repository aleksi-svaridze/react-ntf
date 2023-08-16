import Navbar from "./layout/navbar/Navbar";
import Hero from "./layout/hero/Hero";
import Collection from "./layout/collection/Collection";
import Creators from "./layout/creators/Creators";
import Categories from "./layout/categories/Categories";
import Nfts from "./layout/nfts/Nfts";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Nfts />
    </div>
  );
}

export default App;
