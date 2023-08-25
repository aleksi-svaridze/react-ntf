import Button from '../../components/buttons/Buttons'

export const PrimaryHeading = ({heading, desc, btnText, btnIcon, path}) => {
    return(
        <div className='d-flex justify-content-between'>
            <div>
                <h2 className='primary-heading text-white text-capitalize fw-semibold'>{heading}</h2>
                { desc ? <p className='primary-desc text-white text-capitalize fw-normal'>{desc}</p> : null }
            </div>
            { btnText ? 
                    <Button
                        icon={btnIcon} 
                        content={btnText} 
                        btnStyle='text-white align-self-end btn_custom btn_custom--black heading-btn d-none d-lg-inline-flex' 
                        path={path}
                    /> 
                    : null
            }
        </div>
    )
}

export const SecondaryHeading = ({content, customStyles}) => {
    return(
        <h1 className={`text-white text-capitalize secondary-heading fw-semibold m-0 ${customStyles}`}>{content}</h1>
    )
}

export const Desc = ({customStyles, content}) => {
    return (
        <p className={`${customStyles} text-white text-capitalize fw-normal`}>{content}</p>
    )
}