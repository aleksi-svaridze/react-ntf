import { Desc, SecondaryHeading } from "../components/headings/Headings";
import SearchForm from "../components/search-form/SearchForm";
import { useState } from "react";

import formIcon from '../media/images/icons/search_icon.svg'
import NftsCard from "../components/nfts-card/NftsCard";
import ntfsCards from '../data/creators/creators.json'


const Marketplace = () => {
    const [tabIndex, setTabIndex ]= useState(1);

    const handleState = (index) => {
        setTabIndex(index)
    }

    let creator = ntfsCards[0];

    return(
        <>        
            <div className='container'>
                <div className="layout-container my-3 my-lg-5 py-4">
                    <SecondaryHeading
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
                                className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${tabIndex === 1 ? 'tabs--second-title tabs--title-active' : 'tabs--second-title'}`}>NFTs<span className={`badge font-spacemono d-none d-md-block fw-normal ${tabIndex === 1 ? 'badge badge-active' : 'badge'}`}>{creator.card.length}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div 
                                onClick={() => handleState(2)} 
                                className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${tabIndex === 2 ? 'tabs--second-title tabs--title-active' : 'tabs--second-title'}`}>Collections<span className={`badge font-spacemono d-none d-md-block fw-normal ${tabIndex === 2 ? 'badge badge-active' : 'badge'}`}>{creator.card.slice(5,9).length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black-secondary py-4 border-bottom border-2 border-black-primary">
                <div className="container py-3 py-lg-4">
                    <div className="layout-container py-lg-3">
                        <div className="row g-4">
                            { tabIndex === 1 ? creator.card.map(item => (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <NftsCard 
                                        id={item.id} 
                                        price={item.cardPrice} 
                                        bid={item.cardBid}
                                        image={item.cardCover} 
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles='bg-black-primary' 
                                    />
                                </div>
                            ))
                             :  creator.card.slice(5,9).map(item => (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <NftsCard 
                                        id={item.id} 
                                        price={item.cardPrice} 
                                        bid={item.cardBid}
                                        image={item.cardCover} 
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles='bg-black-primary' 
                                    />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace;