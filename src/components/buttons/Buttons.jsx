import { NavLink } from 'react-router-dom';


const Button = ({path, icon, content, btnStyle}) => {
    return (
        <NavLink to={path} className={`${btnStyle}`}>
            { icon ? <img src={icon} width='20' height='20' alt={content} /> : null}
            {content}
        </NavLink> 
    )
}

export default Button;