import { Desc, FourthiaryHeading } from "../components/headings/Headings";
import SearchForm from "../components/search-form/SearchForm";
import { useState } from "react";

import formIcon from '../media/images/icons/search_icon.svg'


const Marketplace = () => {
    const [state, setState] = useState(1);

    const handleState = (index) => {
        setState(index)
    }
    return(
        <>        
            <div className='container'>
                <div className="layout-container my-3 my-lg-5 py-4">
                    <FourthiaryHeading
                        content='Browse Marketplace' 
                        customStyles='fourthiary-heading' 
                    />
                    <Desc
                        customStyles='mb-0 mt-1 mt-lg-3 pt-1 fourthiary-desc' 
                        content='Browse through more than 50k NFTs on the NFT Marketplace.' 
                    />
                

                    <div className="row mt-3 pt-3">
                        <div className="col-12">
                            <SearchForm placehoder={"Search your favourite NFTs"} icon={formIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-black-secondary"></div>
            <div className="container">
                <div className="layout-container">
                    <div className="row">
                        <div className="col-6">
                            <div 
                                onClick={() => handleState(1)} 
                                className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${state === 1 ? 'tabs--second-title tabs--title-active' : 'tabs--second-title'}`}>NFTs<span className={`badge font-spacemono d-none d-md-block fw-normal ${state === 1 ? 'badge badge-active' : 'badge'}`}>567</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div 
                                onClick={() => handleState(2)} 
                                className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${state === 2 ? 'tabs--second-title tabs--title-active' : 'tabs--second-title'}`}>Collections<span className={`badge font-spacemono d-none d-md-block fw-normal ${state === 2 ? 'badge badge-active' : 'badge'}`}>302</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace;