export const CreatorsCardDesktop = ({id, name, image, sales}) => {
    return (
        <div className="col-sm-6 col-md-4 col-xl-3" key={id} style={{order: id}}>
            <div className="rounded-20 bg-black-secondary creators-card custom-p-20 position-relative">
                <div className="creators-card__number position-absolute rounded-circle bg-black-primary d-flex align-items-center justify-content-center text-black-tertiary">{id}</div>
                <img src={image} className="creators-card__image rounded-circle" alt="" />
                <h5 className="creators-card__name">{name}</h5>
                <p className="creators-card__result">Total Sales: 
                    <span className='creators-card__result--counter font-spacemono'>{sales} ETH</span>
                </p>
            </div>
        </div>
    )
}

export const CreatorsCardMobile = ({id, name, image, sales}) => {
    return (
        <div className="col-12" key={id} style={{order: id}}>
            <div className="rounded-20 bg-black-secondary custom-p-20 d-flex column-gap-20 align-items-center">
                <div className="position-relative rounded-circle">
                    <img src={image} alt="" className="creators-card__image" />
                    <div className="creators-card__number position-absolute rounded-circle bg-black-primary d-flex align-items-center justify-content-center text-black-tertiary">{id}</div>
                </div>
                <div className="ms-3 ps-1">
                    <h5 className="creators-card__name">{name}</h5>
                    <p className="creators-card__result">Total Sales: 
                        <span className='creators-card__result--counter font-spacemono'>{sales} ETH</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
