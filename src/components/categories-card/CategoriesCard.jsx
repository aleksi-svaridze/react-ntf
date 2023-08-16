

const CategoriesCard = ({id, image, icon, text}) => {
    return (
        <div className="col-6 col-xl-3">
            <a href={text} className="cat-card text-decoration-none d-block bg-black-secondary" key={id}>
                <div className="w-100 h-100 position-relative overflow-hidden">
                    <img src={image} alt="" className='w-100 cat-card__image' />
                    <img src={icon} alt="" className='position-absolute top-50 start-50 translate-middle cat-card__icon' />
                </div>
            
                <p className="text-capitalize cat-card__text text-white fw-semibold m-0">{text}</p>
            </a>
        </div>
    )
}

export default CategoriesCard;