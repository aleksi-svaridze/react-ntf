import { useWindowSize } from "usehooks-ts";
import Button from '../components/buttons/Buttons'
import plusIcon from '../media/images/icons/plus_icon.svg'
import copyIcon from '../media/images/icons/copy-icon.svg'

import userCoverDesktop from '../media/images/top-creators/cover/desktop/cover.jpg'
import userCoverMobile from '../media/images/top-creators/cover/mobile/cover.jpg'
import userProfileImg from '../media/images/top-creators/user-image/user-avatar.png'
import HeroServicesCounter from "../components/hero-services-counter/Hero-services-counter";
import { Desc } from "../components/headings/Headings";

import discordIcon from '../media/images/footer/DiscordLogo.svg'
import youtubeIcon from '../media/images/footer/YoutubeLogo.svg'
import twitterIcon from '../media/images/footer/TwitterLogo.svg'
import instagramIcon from '../media/images/footer/InstagramLogo.svg'
import globeIcon from '../media/images/footer/GlobeLogo.svg'
import NftsCard from "../components/nfts-card/NftsCard";

import galaxyImage from '../media/images/nfts/galaxy.png'
import edenImage from '../media/images/nfts/edena.png';
import astroImage from '../media/images/nfts/astro.png';
import cryptoImage from '../media/images/nfts/criptoCity.png'
import dogImage from '../media/images/nfts/dog.png'
import talesImage from '../media/images/nfts/tales.png'
import girlImage from '../media/images/nfts/girl.png'
import robotImage from '../media/images/nfts/robot.png'
import apeImage from '../media/images/nfts/monkey.png'

import userImg from '../media/images/top-creators/user-image/user-avatar.png'


const TopCreator = () => {
    let {width} = useWindowSize();
    let userData = {name: 'animakid'}
    let userStats = [
        {id: 1, num: '250k+', desc: 'Volume'},
        {id: 2, num: '50+', desc: 'NFTs Sold'},
        {id: 3, num: '3000+', desc: 'Followers'},
    ]
    let creatorsPortfolioData = [
        {id: 1, price: '1.63 ETH', bid: '0.33 wETH', image: galaxyImage, text: 'Distant Galaxy'},
        {id: 2, price: '1.63 ETH', bid: '0.33 wETH', image: edenImage, text: 'Life On Edena'},
        {id: 3, price: '1.63 ETH', bid: '0.33 wETH', image: astroImage, text: 'AstroFiction'},
        {id: 4, price: '1.63 ETH', bid: '0.33 wETH', image: cryptoImage, text: 'CryptoCity'},
        {id: 5, price: '1.63 ETH', bid: '0.33 wETH', image: dogImage, text: 'ColorfulDog 0524'},
        {id: 6, price: '1.63 ETH', bid: '0.33 wETH', image: talesImage, text: 'Space Tales'},
        {id: 7, price: '1.63 ETH', bid: '0.33 wETH', image: girlImage, text: 'Cherry Blossom Girl 037'},
        {id: 8, price: '1.63 ETH', bid: '0.33 wETH', image: robotImage, text: 'Dancing Robots 0987'},
        {id: 9, price: '1.63 ETH', bid: '0.33 wETH', image: apeImage, text: 'IceCream Ape'},
    ]

    let output = null;

    if(width >= 768) {
        output =  creatorsPortfolioData;
    }
    else {
        output = creatorsPortfolioData.slice(0, 3);
    }
 
    return(
        <div>

            <div className="top-creators__profile" 
                style={{backgroundImage: `url(${width >= 992 ? userCoverDesktop : userCoverMobile})`}}>
                <div className="container h-100">
                    <div className="layout-container position-relative h-100">
                        <img src={userProfileImg} alt="" className="position-absolute top-creators__profile--img" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="layout-container top-creators__profile--text-content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="top-creators__profile--title text-white text-capitalize fw-semibold">{userData.name}</h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row row-gap-4 row-gap-sm-0 column-gap-sm-4 justify-content-md-end top-creators__profile--btns-wrapper">
                                <Button 
                                    icon={copyIcon}  
                                    path={'copy-cta'}
                                    content={'0xc0E3...B79C'}
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
                                {userStats.map(item => (
                                    <HeroServicesCounter id={item.id} num={item.num} desc={item.desc} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-capitalize text-black-tertiary font-spacemono top-creators__profile--info-title">Bio</h3>
                            <Desc content={'The internet\'s friendliest designer kid.'} customStyles={'top-creators__profile--info-desc mb-0'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-capitalize text-black-tertiary font-spacemono top-creators__profile--info-title">Links</h3>
                            
                            <div className="d-flex" style={{columnGap: '10px'}}>
                                <a href="/website">
                                    <img src={globeIcon} alt="" />
                                </a>
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
                </div>
            </div>

            <div className="border-top border-black-secondary"></div>

            <div className="container">
                <div className="layout-container">
                    <div className="row">
                    
                        <div className="col-4">
                            <div className="text-center text-capitalize tabs--title tabs--title-active fw-semibold d-flex align-items-center justify-content-center column-gap-3">Created<span className="badge badge-active font-spacemono d-none d-md-block fw-normal">302</span></div>
                        </div>

                        <div className="col-4">
                            <div className="text-center text-capitalize tabs--title fw-semibold d-flex align-items-center justify-content-center column-gap-3">owned<span className="badge font-spacemono d-none d-md-block fw-normal">67</span></div>
                        </div>
                        
                        <div className="col-4">
                            <div className="text-center text-capitalize tabs--title fw-semibold d-flex align-items-center justify-content-center column-gap-3">Collection<span className="badge font-spacemono d-none d-md-block fw-normal">4</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 bg-black-secondary border-bottom border-2 border-black-primary">
                <div className="container py-4">
                    <div className="layout-container py-2">
                        <div className="row g-4">
                            {output.map(item => (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <NftsCard
                                        id={item.id}
                                        price={item.price}
                                        bid={item.bid}
                                        image={item.image}
                                        text={item.text}
                                        user={userImg}
                                        userName={'animakid'}
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