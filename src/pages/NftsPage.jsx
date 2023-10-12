import { useWindowSize } from 'usehooks-ts'
import classNames from 'classnames'
import rightArrowIcon from '../media/images/icons/ArrowRight.svg'

import desktopCover from '../media/images/nftsPage/desktopCover.jpg'
import mobileCover from '../media/images/nftsPage/mobileCover.jpg'
import { Desc, PrimaryHeading, SecondaryHeading } from '../components/headings/Headings'
import Timer from '../components/timer/Timer'

import data from '../data/creators/creators.json'
import NftsCard from '../components/nfts-card/NftsCard'
import Button from '../components/buttons/Buttons'

const NftsPage= () => {
    const {width} = useWindowSize();

    let result = null;

    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
        if(data[i].id === '7') {
            result = data[i];
        }
    }

    return(
        <div>
            <div 
                className={classNames('nfts__page--cover', width >= 576 ? 'nfts__page--cover-desktop' : 'nfts__page--cover-mobile')}
                style={{backgroundImage: `url(${ width >= 576 ? desktopCover : mobileCover })`}}></div>

            
            <div className="layout-container py-4">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8 bg-danger">
                            <SecondaryHeading customStyles='fourthiary-heading' content='The Orbitians' />
                            <Desc content='Minted on Sep 30, 2022' customStyles={'text-black-tertiary'} />

                            <div className='d-block d-md-none'>
                                <Timer 
                                timerStyle='mx-auto'
                                btnContent='Place Bid'
                                btnStyle={'btn_custom btn_custom--purple btn_custom--purple-width mx-auto d-flex font-worksans mt-4 text-capitalize'} />
                            </div>

                            <h3 className={`fourthiary-desc font-spacemono text-black-tertiary mb-2 ${width >= 768 ? 'fw-semibold' : 'fw-normal'}`}>Created By</h3>
                            <p className='fourthiary-desc mb-0'>The Orbitians</p>
                            <p className='fourthiary-desc'>is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
                            <p className='fourthiary-desc'>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>
                            <p className='fourthiary-desc'>They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className='d-md-flex justify-content-end align-items-start d-none'>
                                <Timer 
                                timerStyle='mx-auto'
                                btnContent='Place Bid'
                                btnStyle={'btn_custom btn_custom--purple btn_custom--purple-width mx-auto d-flex font-worksans mt-4 text-capitalize'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4 py-lg-5">

                    <div className="row pt-3 pt-lg-4">
                        <div className="col-12">
                            <PrimaryHeading 
                                heading='More from this artist'
                                btnText='Go To Artist Page' 
                                btnIcon={rightArrowIcon} 
                                path=''
                            />
                        </div>
                    </div>
                   
                    <div className="row pb-3 pb-lg-4 gy-4 gy-lg-5 pt-4 pt-lg-5">
                        {   width >= 768 ?
                            result.card.map(item => (
                                <div className='col-12 col-md-6 col-lg-4' key={item.id}>
                                    <NftsCard
                                        price={item.cardPrice}
                                        bid={item.cardBid} 
                                        image={item.cardCover} 
                                        text={item.cardDesc} 
                                        user={result.userImage} 
                                        userName={result.name} 
                                        styles={'bg-black-secondary'} 
                                    />
                                </div>
                            ))
                            : 
                            result.card.slice(0,2).map(item => (
                                <div className='col-12 col-md-6 col-lg-4' key={item.id}>
                                    <NftsCard
                                        price={item.cardPrice}
                                        bid={item.cardBid} 
                                        image={item.cardCover} 
                                        text={item.cardDesc} 
                                        user={result.userImage} 
                                        userName={result.name} 
                                        styles={'bg-black-secondary'} 
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Button
                                path='' 
                                icon={rightArrowIcon} 
                                content={'Go To Artist Page'}
                                btnStyle='btn_custom btn_custom--black d-flex d-lg-none text-white'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NftsPage;