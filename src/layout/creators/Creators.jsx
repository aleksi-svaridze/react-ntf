import { CreatorsCardDesktop, CreatorsCardMobile } from "../../components/creators-card/CreatorsCard";
import { PrimaryHeading } from "../../components/headings/Headings";
import BtnIconRocket from '../../media/images/collection/RocketLaunch.svg'
import Button from "../../components/buttons/Buttons";

import creatorsData from '../../data/creators/creators.json'

const Creators = () => {
    return (
        <div className="container pb-5 mb-4">
            <div className="layout-container">
            <PrimaryHeading 
                heading='Top creators' 
                desc='Checkout Top Rated Creators on the NFT Marketplace'
                btnText='View Rankings'
                btnIcon={BtnIconRocket}
                path='rankings' />

                <div className="row py-5 gy-4 d-none d-sm-flex">
                    {creatorsData.map(creator => (
                        <div className="col-sm-6 col-md-4 col-xl-3" key={creator.id}>
                            <CreatorsCardDesktop 
                                id={creator.id} 
                                name={creator.name} 
                                image={creator.userImage} 
                                sales={creator.sales} 
                                path={creator.name}
                            />
                        </div>
                    ))}
                </div>
                <div className="row py-5 gy-4 d-flex d-sm-none">
                    {creatorsData.slice(0, 6).map(creator => (
                         <div className="col-12" key={creator.id}>
                            <CreatorsCardMobile 
                                id={creator.id} 
                                name={creator.name} 
                                image={creator.userImage} 
                                sales={creator.sales} 
                                path={creator.name}
                            />
                        </div>
                    ))}
                </div>
                <Button
                    icon={BtnIconRocket} 
                    content='View Rankings'
                    btnStyle='text-white btn_custom btn_custom--black heading-btn d-flex d-lg-none' 
                    path='rankings'
                />
            </div>
        </div>
    )
}

export default Creators;