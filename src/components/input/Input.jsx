

const Input = ({id, type, icon, text}) => {
    return(
        <div className="position-relative input" key={id}>
            <input type={type} className="input__type position-absolute text-black-primary fw-normal" placeholder={text} />
            { icon ? <img src={icon} alt={text} className="input__icon position-absolute" /> : null}
        </div>
    )
}

export default Input;