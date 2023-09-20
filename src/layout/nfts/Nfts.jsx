import { PrimaryHeading } from "../../components/headings/Headings";
import NftsCard from "../../components/nfts-card/NftsCard";
import eyeIcon from '../../media/images/nfts/Eye.svg';
import Buttons from '../../components/buttons/Buttons'



import galaxyImage from '../../media/images/nfts/galaxy.png';
import user1 from '../../media/images/nfts/user-1.png';

import edenImage from '../../media/images/nfts/edena.png';
import user2 from '../../media/images/nfts/user-2.png';

import astroImage from '../../media/images/nfts/astro.png';
import user3 from '../../media/images/nfts/user-3.png';

const Nfts = () => {
    const nftsCardData = [
        {id: 1, price: '1.63 ETH', bid: '0.33 wETH', image: galaxyImage, text: 'Distant Galaxy', user: user1, userName: 'MoonDancer'},
        {id: 2, price: '1.63 ETH', bid: '0.33 wETH', image: edenImage, text: 'Life On Edena', user: user2, userName: 'NebulaKid'},
        {id: 3, price: '1.63 ETH', bid: '0.33 wETH', image: astroImage, text: 'AstroFiction', user: user3, 
    userName: 'Spaceone'},
    ]
    return (
        <div className="container py-4 mt-5">
            <div className="layout-container">
                <PrimaryHeading
                    heading='Discover More NFTs'
                    desc='Explore new trending NFTs'
                    btnText='See All'
                    btnIcon={eyeIcon}
                    path='nfts'
                />

                <div className="row g-4 py-4 my-1 py-lg-5 my-lg-2">
                    {nftsCardData.map(item => (
                        <div className="col-12 col-md-4" key={item.id}>
                            <NftsCard
                                id={item.id}
                                price={item.price}
                                bid={item.bid}
                                image={item.image}
                                text={item.text}
                                user={item.user}
                                userName={item.userName}
                                styles={'bg-black-secondary'}
                            />
                        </div>
                    ))}
                </div>
                
                <Buttons 
                    icon={eyeIcon} 
                    content={'See All'} 
                    btnStyle='text-white mt-3 btn_custom btn_custom--black heading-btn d-lg-none d-flex' 
                    path='nfts'
                /> 
            </div>
        </div>
    )
}

export default Nfts;