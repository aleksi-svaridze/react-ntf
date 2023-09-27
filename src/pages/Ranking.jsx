import { Desc, FourthiaryHeading } from "../components/headings/Headings";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";


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
        </div>
    )
}

export default Ranking;