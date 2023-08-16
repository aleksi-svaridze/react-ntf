

const User = ({categories, marginBottom, imageSrc, content}) => {
    return (
        <div className="">
            { categories ? <p className="user__categories text-capitalize fw-semibold" style={{marginBottom: marginBottom}}>{categories}</p> : null }
            <div className='user'>
                <img src={imageSrc} alt="" className='user__img rounded-circle' />
                <span className='user__name text-capitalize'>{content}</span>
            </div>
        </div>
    )
}

export default User;