import Sale from '../sales/Sale';
import User from '../../components/users/User';

import galaxyImage from '../../media/images/nfts/galaxy.png';
import user1 from '../../media/images/nfts/user-1.png';

import edenImage from '../../media/images/nfts/edena.png';
import user2 from '../../media/images/nfts/user-2.png';

import astroImage from '../../media/images/nfts/astro.png';
import user3 from '../../media/images/nfts/user-3.png';


const NftsCard = () => {
    const nftsCardData = [
        {id: 1, price: '1.63 ETH', bid: '0.33 wETH', image: galaxyImage, text: 'Distant Galaxy', user: user1, userName: 'MoonDancer'},
        {id: 2, price: '1.63 ETH', bid: '0.33 wETH', image: edenImage, text: 'Life On Edena', user: user2, userName: 'NebulaKid'},
        {id: 3, price: '1.63 ETH', bid: '0.33 wETH', image: astroImage, text: 'AstroFiction', user: user3, 
    userName: 'Spaceone'},
    ]
    return (
      <>
            {
                nftsCardData.map(item => (
                    <div className="col-12 col-lg-4">
                        <div className="nfts-card">
                            <img src={item.image} alt={item.text} className='w-100' />
                            <div className='nfts-card__text-content bg-black-secondary'>
                                <h2 className='nfts-card__text-content-title text-white text-capitalize fw-semibold'>{item.text}</h2>
                                <User 
                                    imageSrc={item.user} 
                                    content={item.userName}
                                    contentClass='font-spacemono'
                                />
                                <Sale 
                                    price={item.price} 
                                    bid={item.bid}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NftsCard;