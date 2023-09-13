import { useWindowSize } from "usehooks-ts";
import Button from '../components/buttons/Buttons'
import plusIcon from '../media/images/icons/plus_icon.svg'
import copyIcon from '../media/images/icons/copy-icon.svg'

import userCoverDesktop from '../media/images/top-creators/cover/desktop/cover.jpg'
import userCoverMobile from '../media/images/top-creators/cover/mobile/cover.jpg'
import userProfileImg from '../media/images/top-creators/user-image/user-avatar.png'


const TopCreator = () => {
    let {width} = useWindowSize();
    let userData = {name: 'animakid'}
    return(
        <>
            <div 
                className="top-creators__profile" 
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
                                    path={''}
                                    content={'0xc0E3...B79C'}
                                    btnStyle={'btn_custom btn_custom--purple d-inline-flex copy-btn'}
                                />
                                 <Button 
                                    icon={plusIcon}  
                                    path={''}
                                    content={'Follow'}
                                    btnStyle={'btn_custom btn_custom--black text-white d-inline-flex follow-btn'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCreator;