import Hero from "../layout/hero/Hero";
import Collection from "../layout/collection/Collection";
import Creators from "../layout/creators/Creators";
import Categories from "../layout/categories/Categories";
import Nfts from "../layout/nfts/Nfts";
import Auction from "../layout/auction/Auction";
import HowItWorks from "../layout/howItWorks/HowItWorks";


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
    </div>
  );
}

export default Home;