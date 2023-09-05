

const HowItWorksCard = (props) => {
    let {id, img, title, desc} = props.item;

    return(
        <div className="howItWorks-card--container d-flex flex-lg-column align-items-center" key={id}>
            <img src={img} alt="" />
            <div className='howItWorks-card--text-content text-white'>
                <h2 className='howItWorks-card--text-content--title text-capitalize fw-semibold'>{title}</h2>
                <p className='howItWorks-card--text-content--desc mb-0'>{desc}</p>
            </div>
        </div>
    )
}

export default HowItWorksCard;