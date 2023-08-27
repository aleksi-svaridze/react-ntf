import { Desc, SecondaryHeading } from '../components/headings/Headings';
import Input from '../components/input/Input';
import signup_bg from '../media/images/signup/signup_bg.jpg'
import signup_bg_sm from '../media/images/hero/hero_bg_sm.jpg'

import userIcon from '../media/images/signup/user_icon.svg'
import envelopeIcon from '../media/images/signup/envelope_icon.svg'
import lockIcon from '../media/images/signup/lock_icon.svg'
import Button from '../components/buttons/Buttons'

const SignUp = () => {
    const inputData = [
        {id: 1, text: 'Username', icon: userIcon, type: 'text'},
        {id: 2, text: 'Email Address', icon: envelopeIcon, type: 'email'},
        {id: 3, text: 'Password', icon: lockIcon, type: 'password'},
        {id: 4, text: 'Confirm Password', icon: lockIcon, type: 'password'},
    ]
    return (
        <div className="container-fluid mb-4 pb-3 mb-lg-0 pb-lg-0">
            <div className="row gy-5">
                <div className="col-12 col-lg-6 px-0">
                    <div className='text-center'>
                        <img src={signup_bg} alt="" className='w-100 d-none d-lg-block ms-auto' style={{maxWidth: '610px'}} />
                        <img src={signup_bg_sm} alt="" className='w-100 d-lg-none d-block' />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100 ps-0 ps-lg-5 '>
                        <SecondaryHeading content={'Create account'} customStyles='' />
                        <Desc 
                            customStyles='sign-up-desc mt-3 mb-4 pt-1 pb-3 text-center text-lg-start' 
                            content='Welcome! enter your details and start creating, collecting and selling NFTs.'
                        />
                        <form style={{flexShrink: 0, maxWidth: '330px', width: '100%'}}>
                            {
                                inputData.map(item => (
                                    <Input 
                                        text={item.text} 
                                        icon={item.icon} 
                                        type={item.type} 
                                        id={item.id} 
                                    />
                                ))
                            }
                            <Button 
                                path='create-account' 
                                content='Create account' 
                                btnStyle='text-white text-decoration-none bg-purple form-button d-flex align-items-center justify-content-center fw-semibold'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;