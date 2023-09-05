import { PrimaryHeading } from "../../components/headings/Headings";
import NftsCard from "../../components/nfts-card/NftsCard";
import eyeIcon from '../../media/images/nfts/Eye.svg';
import Buttons from '../../components/buttons/Buttons'

const Nfts = () => {
    return (
        <div className="container py-4 mt-5">
            <div className="layout-container">
                <PrimaryHeading
                    heading='Discover More NFTs'
                    desc='Explore new trending NFTs'
                    btnText='See All'
                    btnIcon={eyeIcon}
                    path='nfts'
                />

                <div className="row g-4 py-4 my-1 py-lg-5 my-lg-2">
                    <NftsCard />
                </div>
                
                <Buttons 
                    icon={eyeIcon} 
                    content={'See All'} 
                    btnStyle='text-white mt-3 btn_custom btn_custom--black heading-btn d-lg-none d-flex' 
                    path='nfts'
                /> 
            </div>
        </div>
    )
}

export default Nfts;