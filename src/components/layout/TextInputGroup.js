import React from "react";
import PropTypes from "prop-types";
import classnames from "classname";

const TextInputGroup = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames(" form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.PropsTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChnage: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
