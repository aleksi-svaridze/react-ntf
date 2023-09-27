import { useWindowSize } from "usehooks-ts";

const HalfScreenImage = ({desktopImage, mobileImage}) => {
    let {width} = useWindowSize()

    return(
        <div 
            className="half_screen_image" 
            style={{backgroundImage: width <= 992 ? `url(${mobileImage})` : `url(${desktopImage})`}}></div>
    )
}

export default HalfScreenImage;