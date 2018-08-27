import React from "react";

export const renderInputField = ({ input, label, placeholder, className, type, meta: { touched, error, warning } }) => {
    return (
        <div className="form-group">
            <input {...input} placeholder={placeholder} className={className} type={type} />
            <div>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
        </div>
    );
};

export default renderInputField;
