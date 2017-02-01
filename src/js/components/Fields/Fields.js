import React from 'react';
import TextField from '../TextField/TextField';
//import DownloadField from '../DownloadField/DownloadField';

import DropdownList from 'react-widgets/lib/DropdownList';
//import InputElement from 'react-input-mask';
//import FileInput from 'react-file-input';


export const renderTextField = (props) =>
{
    const { id, input, label, readonly, meta: { touched, error }, ...custom }  = props;

    return (

        <TextField placeholder={label}
                   errorVisible={touched && error}
                   errorText={error}
                   id={id}
                   className="nam"

                   {...input}
                   {...custom}

                   autoComplete="off"
        />
    )
};

    export const renderDropdownListSaveChange = ({valueCurrent,valueField, input, meta: { touched, error }, ...rest, onBlur }) =>
    (
        <div className="input-box">
            <DropdownList filter='contains'
                          caseSensitive={false}
                          {...input}
                          {...rest}
                          value={valueCurrent}
                          defaultValue={[]}
                          onBlur={() => input.onBlur()}
            />
            <div className="error">{error}</div>
        </div>
    )

export const renderDropdownList = ({ input, meta: { touched, error }, ...rest,onBlur }) =>
    (
        <div className="input-box">
            <DropdownList filter='contains'
                          caseSensitive={false}
                          {...input}
                          {...rest}
                          defaultValue={[]}
                          onBlur={() => input.onBlur()}

            />
            <div className="error">{error}</div>
        </div>
    )

    export const renderMasked = (props) =>
    {
        const { input, label, meta: { touched, error } ,errorVisible,className,errorText,id}  = props;

        return (
            <div className={`input-box ${errorVisible ? 'error' : ''} ${className}`}>

                <InputElement {...custom}></InputElement>

                <label className="input-error" htmlFor={id}>{errorText}</label>
            </div>)
    }

