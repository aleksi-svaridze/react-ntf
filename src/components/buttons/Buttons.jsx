import { NavLink } from 'react-router-dom';
import scrollToTop from '../../functions/scrollToTop';


const Button = ({path, icon, content, btnStyle}) => {
    return (
        <NavLink
            to={path} 
            className={`${btnStyle}`}
            onClick={scrollToTop}
        >
            { icon ? <img src={icon} width='20' height='20' alt={content} /> : null}
            {content}
        </NavLink>
    )
}

export default Button;