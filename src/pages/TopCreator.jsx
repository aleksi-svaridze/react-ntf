import { useWindowSize } from "usehooks-ts";

import userCoverDesktop from '../media/images/top-creators/cover/desktop/cover.jpg'
import userCoverMobile from '../media/images/top-creators/cover/mobile/cover.jpg'
import userProfileImg from '../media/images/top-creators/user-image/user-avatar.png'


const TopCreator = () => {
    let {width} = useWindowSize();
    return(
        <div 
            className="top-creators__profile" 
            style={{backgroundImage: `url(${width >= 992 ? userCoverDesktop : userCoverMobile})`}}>
                <div className="container h-100">
                    <div className="layout-container position-relative h-100">
                        <img src={userProfileImg} alt="" className="position-absolute top-creators__profile--img" />
                    </div>
                </div>
        </div>
    )
}

export default TopCreator;