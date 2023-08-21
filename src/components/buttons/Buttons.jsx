import { NavLink } from 'react-router-dom';


const Button = ({icon, content, btnStyle}) => {
    return (
        <NavLink to="signup" className={`${btnStyle}`}>
            <img src={icon} width='20' height='20' alt="" />
            {content}
        </NavLink> 
    )
}

export default Button;