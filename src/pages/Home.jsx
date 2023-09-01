import Hero from "../layout/hero/Hero";
import Collection from "../layout/collection/Collection";
import Creators from "../layout/creators/Creators";
import Categories from "../layout/categories/Categories";
import Nfts from "../layout/nfts/Nfts";
import Auction from "../layout/auction/Auction";


const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Nfts />   
      <Auction /> 
    </div>
  );
}

export default Home;