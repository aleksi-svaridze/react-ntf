

const CategoriesCard = ({id, image, icon, text}) => {
    return (
        <div className="col-6 col-xl-3">
            <div className="cat-card bg-black-secondary overflow-hidden" key={id}>
                <div className="w-100 h-100 position-relative">
                    <img src={image} alt="" className='w-100 cat-card__image' />
                    <img src={icon} alt="" className='position-absolute top-50 start-50 translate-middle cat-card__icon' />
                </div>
            
                <p className="text-capitalize cat-card__text text-white fw-semibold m-0">{text}</p>
            </div>
        </div>
    )
}

export default CategoriesCard;