import { PrimaryHeading } from '../../components/headings/Headings';
import subscribeImg from '../../media/images/subscribe/subscribe_img.png'
import subscribeImgSm from '../../media/images/subscribe/subscribe_img_sm.png'
import Input from '../../components/input/Input';
import Button from '../../components/buttons/Buttons';
import envelopeIcon from '../../media/images/footer/EnvelopeSimple.svg'

const Subscribe = () => {
    return(
        <div className="container subscribe-container">
            <div className="row">
                <div className="col-12 col-lg-5 col-xl-6">
                    <img src={subscribeImg} className='w-100 d-none d-lg-block' alt="" />
                    <img src={subscribeImgSm} className='w-100 d-block d-lg-none' alt="" />
                </div>
                <div className="col-12 col-lg-7 col-xl-6">
                    <div className='h-100 ms-lg-5 ps-lg-2 mt-4 mt-lg-0 pt-2 pt-lg-0 d-flex flex-column  justify-content-center'>
                        <PrimaryHeading heading={'Join our weekly digest'} desc={'Get exclusive promotions & updates straight to your inbox.'} />

                        <div className='py-3 my-1'></div>

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
        </div>
    )
}

export default Subscribe;