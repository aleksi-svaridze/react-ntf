import User from '../../components/users/User'
import heroImg from '../../media/images/hero/hero_img.svg'

import UserImage from '../../media/images/components/users/user_1.svg'


const HeroCard = () => {
    return (
        <div className='hero-card'>
            <img src={heroImg} alt="" className='w-100' />
            <div className='bg-black-secondary custom-p-20'>
                {/* <h5 className=' mb-2'>Space Walking</h5> */}
                <User 
                    categories={'Space Walking'} 
                    marginBottom='10px'
                    imageSrc={UserImage} 
                    content='animakid' 
                />
            </div>
        </div>
    )
}

export default HeroCard;