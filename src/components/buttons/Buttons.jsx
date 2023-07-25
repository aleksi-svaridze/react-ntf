


const Button = ({icon, content, btnStyle}) => {
    return (
        <a href="/#" className={`${btnStyle}`}>
            <img src={icon} width='20' height='20' alt="" />
            {content}
        </a>
    )
}

export default Button;