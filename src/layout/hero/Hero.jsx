import HeroCard from "../../components/hero-card/HeroCard";
import Button from "../../components/buttons/Buttons";
import RocketIcon from '../../media/images/hero/RocketLaunch.svg';



const Hero = () => {

    return (
        <div className="container bg-danger py-5">
            <div className="row py-4">
                <div className="col-12 col-lg-6 py-2">
                    <h1 className='fw-semibold'>Discover digital art & Collect NFTs</h1>
                    <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    <Button
                        icon={RocketIcon}
                        content='get started'
                        btnStyle='btn_custom btn_custom--purple d-inline-block' 
                    />  
                    <div className="d-block d-lg-none">
                        <HeroCard />
                    </div>
                </div>
                <div className="col-12 col-lg-6 py-2">
                    <div className="d-none d-lg-block">
                        <HeroCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;