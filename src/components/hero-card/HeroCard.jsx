import User from '../../components/users/User'
import heroImg from '../../media/images/hero/hero_img.svg'


const HeroCard = () => {
    return (
        <div className='hero-card'>
            <img src={heroImg} alt="" className='w-100' />
            <div className='bg-black-secondary custom-p-20'>
                <h5 className='text-capitalize fw-semibold mb-2'>Space Walking</h5>
                <User />
            </div>
        </div>
    )
}

export default HeroCard;