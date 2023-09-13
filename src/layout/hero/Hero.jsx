import HeroCard from "../../components/hero-card/HeroCard";
import Button from "../../components/buttons/Buttons";
import RocketIcon from '../../media/images/hero/RocketLaunch.svg';
import HeroServicesCounter from "../../components/hero-services-counter/Hero-services-counter";
import { Desc } from "../../components/headings/Headings";



const Hero = () => {
    const counterData = [
        {id: 1, num: '240k+', desc: 'total sale'},
        {id: 2, num: '100k+', desc: 'auctions'},
        {id: 3, num: '240k+', desc: 'artists'},
    ]

    return (
        <div className="container py-0 py-lg-5">
            <div className="layout-container">
                <div className="row py-4">
                    <div className="col-12 col-lg-6 py-3 py-lg-2">
                        <h1 className='fw-semibold text-capitalize text-white hero-title'>Discover digital art & Collect NFTs</h1>
                        <Desc 
                            content='NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.' 
                            customStyles='hero-desc pe-xl-5'
                        />
                        <div className="d-none d-lg-block">
                            <Button
                                icon={RocketIcon}
                                content='get started'
                                btnStyle='btn_custom btn_custom--purple hero-btn d-inline-flex'
                                path='start'
                            /> 
                        </div>
                        <div className="d-none d-lg-flex align-items-center justify-content-between pe-xl-5">
                            {
                                counterData.map(item => (
                                    <HeroServicesCounter id={item.id} num={item.num} desc={item.desc} />
                                ))
                            }
                        </div> 
                        <div className="d-block d-lg-none">
                            <HeroCard />
                        </div>
                        <div className="d-block d-lg-none">
                            <Button
                                icon={RocketIcon}
                                content='get started'
                                btnStyle='btn_custom btn_custom--purple hero-btn d-flex'
                                path='start'
                            /> 
                        </div>
                        <div className="d-flex align-items-center justify-content-between d-lg-none">
                            {
                                counterData.map(item => (
                                    <HeroServicesCounter id={item.id} num={item.num} desc={item.desc} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 pb-0 py-lg-2">
                        <div className="d-none d-lg-block">
                            <HeroCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;