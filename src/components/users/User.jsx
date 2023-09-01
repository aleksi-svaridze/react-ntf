

const User = ({userContainer, categories, marginBottom, imageSrc, content, contentClass}) => {
    return (
        <div className="">
            { categories ? <p className="user__categories text-capitalize fw-semibold" style={{marginBottom: marginBottom}}>{categories}</p> : null }
            <div className={`user ${userContainer}`}>
                <img src={imageSrc} alt="" className='user__img rounded-circle' />
                <span className={`user__name text-capitalize ${contentClass}`}>{content}</span>
            </div>
        </div>
    )
}

export default User;