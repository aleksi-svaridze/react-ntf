import Button from "../buttons/Buttons";

const Input = ({inputContainerStyle, id, type, inputIcon, text, inputStyle, icon, path, content, btnStyle}) => {
    return(
        <div className={inputContainerStyle} key={id}>
            <input type={type} className={inputStyle} placeholder={text} />
            { inputIcon ? <img src={inputIcon} alt={text} className="input__icon position-absolute" /> : null}

            { path && <Button 
                        path={path}
                        icon={icon}
                        content={content}
                        btnStyle={btnStyle}
                    />
            }
        </div>
    )
}

export default Input;