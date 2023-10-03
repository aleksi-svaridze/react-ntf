import { Desc, FourthiaryHeading } from "../components/headings/Headings";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { TableHeader } from "../components/tables/Tables";

import creator1 from '../media/images/creators/user1.png'


const Ranking = () => {
    let [toggleTabsState, setToggleTabsState] = useState(1);
    let {width} = useWindowSize();

    let toggleTabContent = (index) => {
        setToggleTabsState(index);
    }
    return(
        <div className="container">
            <div className="layout-container my-1 my-lg-5 py-4">
                <FourthiaryHeading 
                    content='Top Creators' 
                    customStyles='fourthiary-heading' 
                />
                <Desc 
                    customStyles='mb-0 mt-1 mt-lg-3 pt-1 fourthiary-desc' 
                    content='Check out top ranking NFT artists on the NFT Marketplace.' 
                />
            </div>

            <div className="layout-container">
                <div className="row">
                    <div className="col-3">
                        <div 
                            onClick={() => toggleTabContent(1)} 
                            className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center ${toggleTabsState === 1 ? 'tabs--title m-0 py-3 tabs--title-active' : 'tabs--title m-0 py-3'}`}>
                                {width >= 768 ? 'Today' : '1d'}
                        </div>
                    </div>
                    <div className="col-3">
                        <div 
                            onClick={() => toggleTabContent(2)} 
                            className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center ${toggleTabsState === 2 ? 'tabs--title  m-0 py-3 tabs--title-active' : 'tabs--title  m-0 py-3'}`}>
                                {width >= 768 ? 'This Week' : '7d'}
                        </div>
                    </div>
                    <div className="col-3">
                        <div 
                            onClick={() => toggleTabContent(3)} 
                            className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center ${toggleTabsState === 3 ? 'tabs--title  m-0 py-3 tabs--title-active' : 'tabs--title  m-0 py-3'}`}>
                                {width >= 768 ? 'This Month' : '30d'}
                        </div>
                    </div>
                    <div className="col-3">
                        <div 
                            onClick={() => toggleTabContent(4)} 
                            className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center ${toggleTabsState === 4 ? 'tabs--title  m-0 py-3 tabs--title-active' : 'tabs--title  m-0 py-3'}`}>
                                All Time
                        </div>
                    </div>
                </div>
            </div>

            <TableHeader />

            <div className="container py-0">
                <div className="row rounded-20 text-capitalize fw-normal bg-black-secondary top_creator">
                    <div className="col-9 col-sm-8 col-md-6 px-0">
                        <div className="d-flex align-items-center font-spacemono">
                            <div className="top_creator--number text-black-tertiary fw-normal d-md-flex align-items-center justify-content-center">
                                1
                            </div>
                                
                            <img src={creator1} alt="" className="top_creator--image" />
                            
                            <div className="top_creator--name text-white font-worksans">
                                Jaydon Ekstrom Bothman
                            </div>
                       </div>
                    </div>
                    <div className="col-2 col-md-3 d-none d-md-flex align-items-center col-lg-2">
                        <span className="top_creator--stats font-spacemono text-green fw-normal">1.41%</span>
                    </div>
                    <div className="col-2 d-none d-lg-flex align-items-center font-spacemono">
                       <span className="top_creator--stats font-spacemono text-white fw-normal"> 602</span>
                    </div>
                    <div className="col-3 col-sm-4 col-md-3 col-lg-2 font-spacemono d-flex align-items-center">
                        <span className="top_creator--stats font-spacemono text-white fw-normal">12.4 ETH</span>
                    </div>
                </div>

                <div className="row rounded-20 text-capitalize fw-normal bg-black-secondary top_creator">
                    <div className="col-9 col-sm-8 col-md-6 px-0">
                        <div className="d-flex align-items-center font-spacemono">
                            <div className="top_creator--number text-black-tertiary fw-normal d-md-flex align-items-center justify-content-center">
                                1
                            </div>
                                
                            <img src={creator1} alt="" className="top_creator--image" />
                            
                            <div className="top_creator--name text-white font-worksans">
                                Jaydon Ekstrom Bothman
                            </div>
                       </div>
                    </div>
                    <div className="col-2 col-md-3 d-none d-md-flex align-items-center col-lg-2">
                        <span className="top_creator--stats font-spacemono text-green fw-normal">1.41%</span>
                    </div>
                    <div className="col-2 d-none d-lg-flex align-items-center font-spacemono">
                       <span className="top_creator--stats font-spacemono text-white fw-normal"> 602</span>
                    </div>
                    <div className="col-3 col-sm-4 col-md-3 col-lg-2 font-spacemono d-flex align-items-center">
                        <span className="top_creator--stats font-spacemono text-white fw-normal">12.4 ETH</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking;