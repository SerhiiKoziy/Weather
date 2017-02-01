import React, {PropTypes} from 'react';


const TextField = ({id,className, answerType, valueField, answer, fieldType,placeholder,errorText, errorVisible, onChange, label, ...otherProps}) => {
    placeholder = placeholder || label;
    return (
        <div className={`input-box ${errorVisible ? 'error' : ''} ${className}`}>
            {fieldType === 'input' ? (
                <input placeholder={placeholder}
                       id={id}
                       {...otherProps}
                       onChange={typeof onChange == 'function' ? onChange : false}/>
            ) : (
                fieldType === 'textarea' ? (
                    <textarea placeholder={placeholder} id={id} {...otherProps}  onChange={typeof onChange == 'function' ? onChange : false}/>
                ) : ('')
            )
            }


            <label className="input-error" htmlFor={id}>{errorText}</label>
        </div>
    )
};

// Make ESLint happy again: add validation to props
TextField.propTypes = {
    id:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    errorVisible:PropTypes.bool,
    errorText:PropTypes.string,
    onChange:PropTypes.func,

};
TextField.defaultProps = {
    errorText:'error',
    fieldType:'input',
    placeholder:'',
    errorVisible:false,
    onChange:()=>{},

};

export default TextField;
