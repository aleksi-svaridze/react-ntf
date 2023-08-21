import Logo from '../../media/images/navbar/Logo.svg';
import UserIcon from '../../media/images/navbar/User.svg';
import Button from '../../components/buttons/Buttons';
import burgerMenu from '../../media/images/navbar/BurgerMenu.svg';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} alt="" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={burgerMenu} className="navbar-toggler-icon" alt='' />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-0 column-gap-3">
                        <li className="nav-item d-flex align-items-center px-3">
                            <NavLink className="nav-link text-white fw-semibold" to="marketplace">Marketplace</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center px-3">
                            <NavLink className="nav-link text-white fw-semibold" to="rankings">Rankings</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center px-3">
                            <NavLink className="nav-link text-white fw-semibold" to="wallet">Connect a wallet</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Button 
                                btnStyle={'btn_custom btn_custom--purple navbar-btn d-inline-flex'}
                                text_color={'text-white'}
                                icon={UserIcon}
                                content={'Sign In'}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;