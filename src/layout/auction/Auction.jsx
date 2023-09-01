import Button from "../../components/buttons/Buttons";
import buttonIcon from '../../media/images/nfts/Eye.svg'


const Auction = () => {
    return(
        <div className="auction-container position-relative">
            <div className="container position-absolute bottom-0 start-50 translate-middle-x pb-4 pb-md-5">
                <div className="row pb-4">
                    <div className="col-12 pb-2">
                        boppp
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col-12 col-lg-7">
                        <div>
                            <h2 className="auction-container--title text-white text-capitalize fw-semibold mb-4 pb-2">Magic Mashrooms</h2>
                            <Button 
                                path='see-nfts' 
                                icon={buttonIcon} 
                                content='see NFTS' 
                                btnStyle='btn_custom d-lg-inline-flex auction-btn bg-white text-black-primary d-none' 
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>

                            <Button 
                                path='see-nfts' 
                                icon={buttonIcon} 
                                content='see NFTS' 
                                btnStyle='btn_custom d-lg-none auction-btn bg-white text-black-primary d-flex' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auction;