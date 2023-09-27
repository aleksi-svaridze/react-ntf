


const WalletCard = ({src, icon, title}) => {
    return(
        <a href={src} className="wallet-card text-decoration-none d-flex align-items-center bg-black-secondary border-purple border">
            <img src={icon} alt="" className="wallet-card--icon" />
            <h3 className="wallet-card--title text-capitalize fw-semibold text-white m-0">{title}</h3>
        </a>
    )
}

export default WalletCard;