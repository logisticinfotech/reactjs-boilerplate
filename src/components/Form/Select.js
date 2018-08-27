import React from "react";

const renderSelectField = ({ input, label, type, meta: { touched, error, warning }, children }) => {
    return (
        <div className="form-group">
            <select {...input}>{children}</select>
            {touched && error && <span>{error}</span>}
        </div>
    );
};

export default renderSelectField;
