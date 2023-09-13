import Sale from '../sales/Sale';
import User from '../../components/users/User';


const NftsCard = ({id, price, bid, image, text, user, userName, styles}) => {
    return (
        <div className="nfts-card" key={id}>
            <img src={image} alt={text} className='w-100' />
            <div className={`nfts-card__text-content ${styles}`}>
                <h2 className='nfts-card__text-content-title text-white text-capitalize fw-semibold'>{text}</h2>
                <User 
                    imageSrc={user} 
                    content={userName}
                    contentClass='font-spacemono'
                />
                <Sale 
                    price={price} 
                    bid={bid}
                />
            </div>
        </div>
    )
}

export default NftsCard;