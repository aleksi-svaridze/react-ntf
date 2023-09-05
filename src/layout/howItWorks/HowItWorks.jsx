import HowItWorksCard from "../../components/howItWorks-card/HowItWorksCard";

import imgWallet from '../../media/images/howItWorks/wallet.png'
import imgCollection from '../../media/images/howItWorks/collection.png'
import imgEarning from '../../media/images/howItWorks/earning.png'


const HowItWorks = () => {
    let data = [
        {id: 1, img: imgWallet, title: 'Setup Your wallet', desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'},
        {id: 2, img: imgCollection, title: 'Create Collection', desc: 'Upload your work and setup your collection. Add a description, social links and floor price.'},
        {id: 3, img: imgEarning, title: 'Start Earning', desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'},
    ]
    return(
        <div className="how-it-works-container container">
             <div className="row gy-4 gy-lg-0">
                {
                    data.map(item => (
                    <div className="col-12 col-lg-4">
                        <HowItWorksCard item={item} />
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowItWorks;