import Buttons from '../../components/buttons/Buttons'
import BtnIcon from '../../media/images/collection/RocketLaunch.svg'

export const PrimaryHeading = ({heading, desc, btnText}) => {
    return(
        <div className='d-flex justify-content-between'>
            <div>
                <h2 className='primary-heading text-white text-capitalize fw-semibold'>{heading}</h2>
                { desc ? <p className='primary-desc text-white text-capitalize fw-normal'>{desc}</p> : null }
            </div>
            { btnText ? 
                        <Buttons 
                            icon={BtnIcon} 
                            content={btnText} 
                            btnStyle='text-white align-self-end btn_custom btn_custom--black heading-btn d-inline-flex' 
                        /> 
                        : null
            }
        </div>
    )
}