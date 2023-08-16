import galaxyImage from '../../media/images/nfts/galaxy.svg';
import User from '../../components/users/User';
import user1 from '../../media/images/nfts/user-1.svg';

const NftsCard = () => {
    return (
        <div className="col-12 col-lg-4">
            <div className="nfts-card bg-black-secondary">
                <img src={galaxyImage} alt="" className='w-100' />
                <div className='nfts-card__text-content'>
                    <h2 className='nfts-card__text-content-title text-white text-capitalize fw-semibold'>Distant Galaxy</h2>
                    <User 
                        imageSrc={user1} 
                        content='MoonDancer'
                        contentClass='font-spacemono'
                    />
                </div>
            </div>
        </div>
    )
}

export default NftsCard;