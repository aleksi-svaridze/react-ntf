import Buttons from '../../components/buttons/Buttons'

export const PrimaryHeading = ({heading, desc, btnText, btnIcon}) => {
    return(
        <div className='d-flex justify-content-between'>
            <div>
                <h2 className='primary-heading text-white text-capitalize fw-semibold'>{heading}</h2>
                { desc ? <p className='primary-desc text-white text-capitalize fw-normal'>{desc}</p> : null }
            </div>
            { btnText ? 
                        <Buttons 
                            icon={btnIcon} 
                            content={btnText} 
                            btnStyle='text-white align-self-end btn_custom btn_custom--black heading-btn d-none d-lg-inline-flex' 
                        /> 
                        : null
            }
        </div>
    )
}