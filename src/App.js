import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

import Marketplace from './pages/Marketplace';
import Ranking from './pages/Ranking';
import Wallet from './pages/Wallet';
import SignUp from './pages/SignUp';
import TopCreator from "./pages/TopCreator";
import Home from './pages/Home';
import NftsPage from "./pages/NftsPage";

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from "./pages/NotFound";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path='rankings/:name' element={<TopCreator />} />
          <Route path='rankings' element={<Ranking />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='nfts' element={<NftsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
