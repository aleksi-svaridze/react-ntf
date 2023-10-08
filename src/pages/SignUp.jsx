import { Desc, SecondaryHeading } from '../components/headings/Headings';
import Input from '../components/input/Input';
import HalfScreenImage from '../components/signup/HalfScreenImage';

import userIcon from '../media/images/signup/user_icon.svg'
import envelopeIcon from '../media/images/signup/envelope_icon.svg'
import lockIcon from '../media/images/signup/lock_icon.svg'
import Button from '../components/buttons/Buttons'

import SignupDesktop from '../media/images/signup/signup_bg.jpg'
import SignupMobile from '../media/images/signup/signup_bg_sm.jpg'

const SignUp = () => {
    const inputData = [
        {id: 1, text: 'Username', icon: userIcon, type: 'text'},
        {id: 2, text: 'Email Address', icon: envelopeIcon, type: 'email'},
        {id: 3, text: 'Password', icon: lockIcon, type: 'password'},
        {id: 4, text: 'Confirm Password', icon: lockIcon, type: 'password'},
    ]
    return (
        <div className="container-fluid pb-3 pb-lg-0">
            <div className="row">
                <div className="col-12 col-lg-6 px-0">
                    <HalfScreenImage 
                        desktopImage={SignupDesktop}
                        mobileImage={SignupMobile} />
                </div>
                <div className="col-12 col-lg-6 my-4 my-lg-5">
                    <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100 ps-0 ps-lg-5 pt-2 py-lg-5'>
                        <SecondaryHeading content={'Create account'} customStyles='secondary-heading' />
                        <Desc 
                            customStyles='sign-up-desc mt-3 mb-3 mb-lg-4 pt-1 pb-3 text-center text-lg-start' 
                            content='Welcome! enter your details and start creating, collecting and selling NFTs.'
                        />
                        <form style={{flexShrink: 0, maxWidth: '330px', width: '100%'}}>
                            {
                                inputData.map(item => (
                                    <div key={item.id}>
                                        <Input 
                                            inputContainerStyle='position-relative input'
                                            text={item.text} 
                                            inputIcon={item.icon} 
                                            type={item.type} 
                                            id={item.id} 
                                            inputStyle='input__type position-absolute text-black-primary fw-normal'
                                        />
                                    </div>
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