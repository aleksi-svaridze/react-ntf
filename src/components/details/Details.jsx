


const Details = ({icon, content, url}) => {
    return(
        <a href={url} className='d-flex align-items-center text-decoration-none details'>
            <img src={icon} alt="" className="details--icon" />
            <p className='mb-0 text-white fw-normal details--content'>{content}</p>
        </a>
    )
}

export default Details;