import logo from '../../media/images/navbar/Logo.svg'
import { Link } from 'react-router-dom';
import discordIcon from '../../media/images/footer/DiscordLogo.svg'
import youtubeIcon from '../../media/images/footer/YoutubeLogo.svg'
import twitterIcon from '../../media/images/footer/TwitterLogo.svg'
import instagramIcon from '../../media/images/footer/InstagramLogo.svg'
import Input from '../../components/input/Input';
import Button from '../../components/buttons/Buttons';
import envelopeIcon from '../../media/images/footer/EnvelopeSimple.svg';

const Footer = () => {
    return (
        <footer className="bg-black-secondary py-4">
            <div className="container py-3 px-3 px-lg-auto">
                <div className="row px-auto px-lg-4">
                    <div className="col-12 col-lg-4 col-xl-4 col-xxl-5">
                        <div className="mb-4">
                            <h3 className="tertiary-heading text-white font-spacemono fw-bold text-capitalize">
                                <img src={logo} alt="" />
                            </h3>
                            <p className='text-gray footer-desc'>NFT marketplace UI created with Anima for Figma.</p>
                            <p className='text-gray footer-desc'>Join our community</p>
                            <div className="d-flex" style={{columnGap: '10px'}}>
                                <a href="/discord">
                                    <img src={discordIcon} alt="" />
                                </a>
                                <a href="/youtube">
                                    <img src={youtubeIcon} alt="" />
                                </a>
                                <a href="/twitter">
                                    <img src={twitterIcon} alt="" />
                                </a>
                                <a href="/instagram">
                                    <img src={instagramIcon} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 col-xl-3 col-xxl-3">
                        <div className="mb-4">
                            <h3 className="tertiary-heading text-white font-spacemono fw-bold text-capitalize">
                                Explore
                            </h3>
                            <Link to="marketplace" className='footer-desc text-decoration-none d-block text-gray'>Marketplace</Link>
                            <Link to="rankings" className='footer-desc text-decoration-none d-block text-gray'>Rankings</Link>
                            <Link to="wallet" className='footer-desc text-decoration-none d-block text-gray'>Connect a wallet</Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="mb-4">
                            <h3 className="tertiary-heading text-white font-spacemono fw-bold text-capitalize">
                                Join our weekly digest
                            </h3>
                            <p className='text-gray footer-desc'>Get exclusive promotions & updates<br /> straight to your inbox.</p>

                            <Input 
                                inputContainerStyle='position-relative subscribe-form w-100 overflow-hidden d-none d-sm-block'
                                id=''
                                type='email'
                                inputIcon=''
                                text='Enter your email here'
                                inputStyle='position-absolute subscribe-form--input fw-normal start-0 top-0 bottom-0 end-0 h-100'

                                icon=''
                                path='subscribe'
                                content='Subscribe'
                                btnStyle='bg-purple position-absolute text-decoration-none fw-semibold text-white d-flex align-items-center justify-content-center subscribe-form--btn top-0 bottom-0 end-0'
                            />

                            <Input
                                inputContainerStyle='position-relative subscribe-form w-100 overflow-hidden d-sm-none d-block'
                                id=''
                                type='email'
                                inputIcon=''
                                text='Enter your email here'
                                inputStyle='position-absolute subscribe-form--input fw-normal start-0 top-0 bottom-0 end-0' 
                            />

                            <Button
                                icon={envelopeIcon}
                                path='subscribe'
                                content='Subscribe'
                                btnStyle='bg-purple text-decoration-none fw-semibold text-white d-sm-none d-flex align-items-center column-gap-3 mt-3 mt-sm-0 justify-content-center subscribe-form--btn w-100'
                            />

                        </div>
                    </div>
                </div>
                <hr className='m-0' />
                <p className='text-gray copyright'>&copy; NFT Market. Use this template freely.</p>
            </div>
        </footer>
    )
}

export default Footer;  