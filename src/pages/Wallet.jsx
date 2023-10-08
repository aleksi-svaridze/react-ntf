import { Desc, SecondaryHeading } from '../components/headings/Headings';
import HalfScreenImage from '../components/signup/HalfScreenImage';
import WalletCard from '../components/wallet-card/WalletCard';
import desktopBg from '../media/images/connectToWallet/desktp_hero.jpg';
import mobileBg from '../media/images/connectToWallet/mobile_hero.jpg';

import metamaskIcon from '../media/images/connectToWallet/Metamask.png'
import walletConnectIcon from '../media/images/connectToWallet/WalletConnect.png'
import coinbaseIcon from '../media/images/connectToWallet/Coinbase.png'


const Wallet = () => { 
    let walletCardData = [
        {id: 1, icon: metamaskIcon, title: 'Metamask'},
        {id: 2, icon: walletConnectIcon, title: 'Wallet Connect'},
        {id: 3, icon: coinbaseIcon, title: 'Coinbase'}
    ]
    return(
        <div className="container-fluid pb-3 pb-lg-0">
            <div className="row">

                <div className="col-12 col-lg-6 px-0">
                    <HalfScreenImage 
                        desktopImage={desktopBg}
                        mobileImage={mobileBg} 
                    />
                </div>

                <div className="col-12 col-lg-6 my-4 my-lg-5">
                    <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start ps-0 ps-lg-5 pt-2 py-lg-5'>
                        <SecondaryHeading content={'Connect wallet'} customStyles='secondary-heading' />
                        <Desc
                            customStyles='sign-up-desc mt-3 mb-3 mb-lg-4 pt-1 pb-3 text-center text-lg-start' 
                            content='Choose a wallet you want to connect. There are several wallet providers.'
                        />
                        <div className='w-100 d-flex flex-column' style={{flexShrink: 0, rowGap: '20px', maxWidth: '320px'}}>
                            {
                                walletCardData.map(card => (
                                    <div key={card.id}>
                                        <WalletCard id={card.id} icon={card.icon} title={card.title} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet;