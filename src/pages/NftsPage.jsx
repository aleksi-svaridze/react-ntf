import { useWindowSize } from 'usehooks-ts'
import classNames from 'classnames'

import desktopCover from '../media/images/nftsPage/desktopCover.jpg'
import mobileCover from '../media/images/nftsPage/mobileCover.jpg'
import { Desc, SecondaryHeading } from '../components/headings/Headings'
import Timer from '../components/timer/Timer'

const NftsPage= () => {
    const {width} = useWindowSize();

    return(
        <div>
            <div 
                className={classNames('nfts__page--cover', width >= 576 ? 'nfts__page--cover-desktop' : 'nfts__page--cover-mobile')}
                style={{backgroundImage: `url(${ width >= 576 ? desktopCover : mobileCover })`}}></div>

            
            <div className="layout-container py-4">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-8">
                            <SecondaryHeading customStyles='fourthiary-heading' content='The Orbitians' />
                            <Desc content='Minted on Sep 30, 2022' customStyles={'text-black-tertiary'} />
                        </div>
                        <div className="col-4">
                            <Timer timerBtn={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftsPage;