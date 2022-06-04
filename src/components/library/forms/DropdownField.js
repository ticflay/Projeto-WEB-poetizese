import React from "react";
import { Field } from "redux-form";
import Label from "./Label";

const labelStyle = {
  marginBottom: "4px",
  display: "block",
  fontWeight: "bold",
};

function DropdownField(props) {
  return (
    <Field
      name={props.name}
      component={DropDownSelect}
      items={props.items}
      label={props.label}
      placeholder={props.placeholder}
      className="form-control"
    ></Field>
  );
}

function DropDownSelect(props) {
  const renderSelectOptions = (item) => (
    <option key={`${item.name || item.title}${item.id}`} value={item.id}>
      {item.name || item.title}
    </option>
  );
  console.log(props);

  return (
    <div>
      <div>
        {props.label && (
          <Label
            style={labelStyle}
            htmlFor={props.id}
            disabled={props.disabled}
          >
            {props.label}
          </Label>
        )}
      </div>
      <select {...props.input} placeholder={props.placeholder}>
        <option value="" defaultValue>
          {props.placeholder || "Selecione"}
        </option>
        {props.items.map(renderSelectOptions)}
      </select>
    </div>
  );
}

export default DropdownField;
