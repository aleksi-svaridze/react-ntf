import User from '../../components/users/User';
import heroImg from '../../media/images/hero/hero_img.png';

import UserImage from '../../media/images/hero/user_1.png';


const HeroCard = () => {
    return (
        <div className='hero-card'>
            <img src={heroImg} alt="" className='w-100' />
            <div className='bg-black-secondary custom-p-20'>
                <User 
                    categories={'Space Walking'} 
                    marginBottom='10px'
                    imageSrc={UserImage} 
                    content='animakid' 
                    contentClass={'font-worksans'}
                />
            </div>
        </div>
    )
}

export default HeroCard;