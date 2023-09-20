import { useWindowSize } from "usehooks-ts";
import { Link, useParams} from "react-router-dom";
import { useState } from "react";

import NftsCard from "../components/nfts-card/NftsCard";
import HeroServicesCounter from "../components/hero-services-counter/Hero-services-counter";
import { Desc } from "../components/headings/Headings";
import Button from '../components/buttons/Buttons'
import plusIcon from '../media/images/icons/plus_icon.svg'
import copyIcon from '../media/images/icons/copy-icon.svg'

import cretorsSingleData from '../data/creators/creators.json'


const TopCreator = () => {
    let [toggleTabsState, setToggleTabsState] = useState(1);
    let {width} = useWindowSize();
    let {name} = useParams();

    let creator = null;

    for(let i = 0; i < cretorsSingleData.length; i++) {
        if( cretorsSingleData[i].name === name ) {
            creator = cretorsSingleData[i];
        }
    }

    let toggleTabContent = (index) => {
        setToggleTabsState(index);
    }

    return(
        <div>
            <div className="top-creators__profile" 
                style={{backgroundImage: `url(${width >= 992 ? creator.coverDesktop : creator.coverMobile})`}}>
                <div className="container h-100">
                    <div className="layout-container position-relative h-100">
                        <img src={creator.userImage} alt="" className="position-absolute top-creators__profile--img" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="layout-container top-creators__profile--text-content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="top-creators__profile--title text-white text-capitalize fw-semibold">{creator.name}</h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row row-gap-4 row-gap-sm-0 column-gap-sm-4 justify-content-md-end top-creators__profile--btns-wrapper">
                                <Button 
                                    icon={copyIcon}  
                                    path={'copy-cta'}
                                    content={creator.ctaCode}
                                    btnStyle={'btn_custom btn_custom--purple d-inline-flex copy-btn'}
                                />
                                 <Button 
                                    icon={plusIcon}  
                                    path={'follow'}
                                    content={'Follow'}
                                    btnStyle={'btn_custom btn_custom--black text-white d-inline-flex follow-btn'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="top-creators__profile--stats d-flex justify-content-between">
                                {creator.stats.map(item => (
                                     <div className="counter" key={item.id}>
                                        <HeroServicesCounter num={item.num} desc={item.desc} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-capitalize text-black-tertiary font-spacemono top-creators__profile--info-title">Bio</h3>
                            <Desc content={creator.bio} customStyles={'top-creators__profile--info-desc mb-0'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-capitalize text-black-tertiary font-spacemono top-creators__profile--info-title">Links</h3>
                            
                            <div className="d-flex" style={{columnGap: '10px'}}>
                                {creator.socials.map(item => (
                                    <Link to={item.link} key={item.id}>
                                        <img src={item.icon} alt="" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-top border-black-secondary"></div>

            <div className="container">
                <div className="layout-container">
                    <div className="row">
                    
                        <div className="col-4">
                            <div 
                            onClick={() => toggleTabContent(1)} 
                            className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${toggleTabsState === 1 ? 'tabs--title tabs--title-active' : 'tabs--title'}`}>Created<span className={`badge font-spacemono d-none d-md-block fw-normal ${toggleTabsState === 1 ? 'badge badge-active' : 'badge'}`}>{creator.created}</span></div>
                        </div>

                        <div className="col-4">
                            <div onClick={() => toggleTabContent(2)} className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${toggleTabsState === 2 ? 'tabs--title tabs--title-active' : 'tabs--title'}`}>owned<span className={`badge font-spacemono d-none d-md-block fw-normal ${toggleTabsState === 2 ? 'badge badge-active' : 'badge'}`}>{creator.owned}</span></div>
                        </div>
                        
                        <div className="col-4">
                            <div onClick={() => toggleTabContent(3)} className={`text-center text-capitalize fw-semibold d-flex align-items-center justify-content-center column-gap-3 ${toggleTabsState === 3 ? 'tabs--title tabs--title-active' : 'tabs--title'}`}>Collection<span className={`badge font-spacemono d-none d-md-block fw-normal ${toggleTabsState === 3 ? 'badge badge-active' : 'badge'}`}>{creator.collection}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 bg-black-secondary border-bottom border-2 border-black-primary">
                <div className="container py-4">
                    <div className="layout-container py-2">
                        <div className={`row g-4 ${toggleTabsState === 1 ? 'd-flex' : 'd-none'}`}>
                            
                            {width <= 768 ? (creator.card.slice(0,3).map(item => (
                                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <NftsCard
                                        id={item.id}
                                        price={item.cardPrice}
                                        bid={item.cardBid}
                                        image={item.cardCover}
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles={'bg-black-primary'}
                                    />
                                </div>
                            ))) : (creator.card.map(item => (
                                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <NftsCard
                                        id={item.id}
                                        price={item.cardPrice}
                                        bid={item.cardBid}
                                        image={item.cardCover}
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles={'bg-black-primary'}
                                    />
                                </div>
                            )))}

                        </div>
                        <div className={`row g-4 ${toggleTabsState === 2 ? 'd-flex' : 'd-none'}`}>
                            
                            {creator.card.slice(0,5).map(item => (
                                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <NftsCard
                                        id={item.id}
                                        price={item.cardPrice}
                                        bid={item.cardBid}
                                        image={item.cardCover}
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles={'bg-black-primary'}
                                    />
                                </div>
                            ))}

                        </div>
                        <div className={`row g-4 ${toggleTabsState === 3 ? 'd-flex' : 'd-none'}`}>
                            
                            {creator.card.slice(0,3).map(item => (
                                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <NftsCard
                                        id={item.id}
                                        price={item.cardPrice}
                                        bid={item.cardBid}
                                        image={item.cardCover}
                                        text={item.cardDesc}
                                        user={creator.userImage}
                                        userName={creator.name}
                                        styles={'bg-black-primary'}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCreator;