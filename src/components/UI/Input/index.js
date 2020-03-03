import React from "react";
import "./style.css";

const Input = ({
  name,
  elementType,
  elementConfig,
  value,
  changed,
  invalid,
  shouldValidate,
  touched
}) => {
  let inputElement = null;
  const inputClasses = ["InputElement"];
  if (invalid && shouldValidate && touched) inputClasses.push("Invalid");
  switch (elementType) {
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...elementConfig}
          name={name}
          value={value}
          onChange={e => changed(e)}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          name={name}
          value={value}
          onChange={e => changed(e)}
        >
          <option value="">select</option>
          {elementConfig.options.map((option, i) => (
            <option key={option.value + i} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...elementConfig}
          name={name}
          value={value}
          onChange={e => changed(e)}
        />
      );
      break;
  }

  return (
    <div className="Input">
      {/* <label>{props.label}</label> */}
      {inputElement}
    </div>
  );
};

export default Input;
