import Button from "../../components/buttons/Buttons";
import User from "../../components/users/User";
import buttonIcon from '../../media/images/nfts/Eye.svg'
import userImg from '../../media/images/collection/user_2.png'
import Timer from "../../components/timer/Timer";


const Auction = () => {
    return(
        <div className="auction-container position-relative">
            <div className="container position-absolute bottom-0 start-50 translate-middle-x pb-4 pb-md-5">
                <div className="layout-container">
                    <div className="row pb-4">
                        <div className="col-12 pb-2">
                            <User 
                                marginBottom='' 
                                imageSrc={userImg} 
                                content='Shroomie' 
                                userContainer='user--autcion d-inline-flex' />
                        </div>
                    </div>

                    <div className="row pb-3">
                        <div className="col-12 col-lg-7">
                            <div>
                                <h2 className="auction-container--title text-white text-capitalize fw-semibold mb-4 pb-2 pe-5 pe-sm-0">Magic Mashrooms</h2>
                                <Button
                                    path='nfts' 
                                    icon={buttonIcon} 
                                    content='see NFTS' 
                                    btnStyle='btn_custom d-lg-inline-flex auction-btn bg-white text-black-primary d-none' 
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="d-lg-flex justify-content-lg-end">
                                <Timer />
                                <Button 
                                    path='nfts' 
                                    icon={buttonIcon} 
                                    content='see NFTS' 
                                    btnStyle='btn_custom d-lg-none auction-btn bg-white text-black-primary d-flex' 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auction;