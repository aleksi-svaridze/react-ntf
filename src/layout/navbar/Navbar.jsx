import Logo from "../../media/images/navbar/Logo.svg";
import logo_sm from "../../media/images/navbar/logo_sm.svg";
import UserIcon from "../../media/images/navbar/User.svg";
import Button from "../../components/buttons/Buttons";
import burgerMenu from "../../media/images/navbar/BurgerMenu.svg";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation-container">
      <nav className="navbar navbar-expand-lg py-2 py-lg-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" className="d-none d-lg-block" />
            <img src={logo_sm} alt="" className="d-lg-none d-block" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img src={burgerMenu} className="navbar-toggler-icon" alt="" />
          </button>

          <div
            className="offcanvas offcanvas-end bg-black-secondary"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header justify-content-end border-1 border-bottom">
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto me-0 column-gap-3">
                <li className="nav-item d-flex d-lg-none align-items-center px-3 mb-3 mb-lg-0">
                  <NavLink className="nav-link text-white fw-semibold" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center px-3 mb-3 mb-lg-0">
                  <NavLink
                    className="nav-link text-white fw-semibold"
                    to="marketplace"
                  >
                    Marketplace
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center px-3 mb-3 mb-lg-0">
                  <NavLink
                    className="nav-link text-white fw-semibold"
                    to="rankings"
                  >
                    Rankings
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center px-3 mb-5 mb-lg-0">
                  <NavLink
                    className="nav-link text-white fw-semibold"
                    to="wallet"
                  >
                    Connect a wallet
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <Button
                    btnStyle={
                      "btn_custom btn_custom--purple navbar-btn d-inline-flex"
                    }
                    text_color={"text-white"}
                    icon={UserIcon}
                    content={"Sign In"}
                    path="signup"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
