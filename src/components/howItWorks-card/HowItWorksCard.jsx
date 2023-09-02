import img1 from '../../media/images/howItWorks/wallet.png'


const HowItWorksCard = () => {
    return(
        <div className="howItWorks-card--container d-flex flex-lg-column">
            <img src={img1} alt="" />
            <div className='howItWorks-card--text-content'>
                <h2 className='howItWorks-card--text-content--title'>Setup Your wallet</h2>
                <p className='howItWorks-card--text-content--desc'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
            </div>
        </div>
    )
}

export default HowItWorksCard;