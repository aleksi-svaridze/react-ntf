import Logo from '../../media/images/navbar/Logo.svg';
import UserIcon from '../../media/images/navbar/User.svg';
import Button from '../../components/buttons/Buttons';
import burgerMenu from '../../media/images/navbar/BurgerMenu.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={Logo} alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={burgerMenu} className="navbar-toggler-icon" alt='' />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-0 column-gap-3">
                        <li className="nav-item d-flex align-items-center px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Marketplace</a>
                        </li>
                        <li className="nav-item d-flex align-items-center px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Rankings</a>
                        </li>
                        <li className="nav-item d-flex align-items-center px-3">
                            <a className="nav-link text-white fw-semibold" href="/#">Connect a wallet</a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Button 
                                btnStyle={'btn_custom btn_custom--purple navbar-btn d-inline-flex'}
                                text_color={'text-white'}
                                icon={UserIcon}
                                content={'Sign In'} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;