import Logo from '../../media/images/navbar/Logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container-fluid py-1">
                <a className="navbar-brand" href="/#">
                    <img src={Logo} alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-0 column-gap-3">
                        <li className="nav-item px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Marketplace</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Rankings</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Connect a wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn" href="/#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;