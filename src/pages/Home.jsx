import Hero from "../layout/hero/Hero";
import Collection from "../layout/collection/Collection";
import Creators from "../layout/creators/Creators";
import Categories from "../layout/categories/Categories";
import Nfts from "../layout/nfts/Nfts";
import Auction from "../layout/auction/Auction";
import HowItWorks from "../layout/howItWorks/HowItWorks";
import Subscribe from "../layout/subscribe/Subscribe";


const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Nfts />  
      <Auction />
      <HowItWorks />
      <Subscribe />
    </div>
  );
}

export default Home;