import { PrimaryHeading } from "../../components/headings/Headings";
import NftsCard from "../../components/nfts-card/NftsCard";
import eyeIcon from '../../media/images/nfts/Eye.svg';

const Nfts = () => {
    return (
        <div className="container py-4 mt-5">
            <PrimaryHeading
                heading='Discover More NFTs'
                desc='Explore new trending NFTs'
                btnText='See All'
                btnIcon={eyeIcon}
            />

            <div className="row g-4 py-4 my-1 py-lg-5 my-lg-2">
                <NftsCard />
            </div>
        </div>
    )
}

export default Nfts;