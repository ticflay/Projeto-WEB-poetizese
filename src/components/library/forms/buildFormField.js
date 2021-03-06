import React from "react";
import { css } from "glamor";
import Label from "./Label";
import FieldBlock from "./FieldBlock";
import Hint from "./Hint";

const layout = {
  message: {
    position: "absolute",
    right: 0,
    top: "-18px",
    marginTop: `-4px`,
  },
  label: {
    marginBottom: "4px",
    display: "block",
    fontWeight: "bold",
  },
};

const iconContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
});

const errorWrapper = css({
  textAlign: "left",
  position: "relative",
  display: "inline-block",
  width: "100%",
});

const defaultMessages = {
  required: "Campo obrigatório",
  email: "E-mail inválido",
  minSize: "Muito curto",
};

const defaultShortMessages = {
  required: "Obrigatório",
  email: "Ínvalido",
  minSize: "Muito curto",
};

function errorMessage(errorType, customMessages, short = false) {
  return (
    (customMessages && customMessages[errorType]) ||
    (short ? defaultShortMessages : defaultMessages)[errorType] ||
    errorType
  );
}

const buildFormField = (InputComponent, selectProps) => (props) => {
  const {
    input = {},
    meta = {},
    style,
    label,
    hint,
    required,
    validationMessages,
    shortMessages,
    message,
    minSize,
    inline,
    Icon,
    inputStyle,
    className,
    inputClassName,
    ...rest
  } = props;

  const id = input.id || input.name;
  const error = meta.touched ? meta.error : undefined;

  return (
    <FieldBlock
      className={className}
      inline={inline}
      style={{ ...style, width: rest.width }}
    >
      <Label style={layout.label} htmlFor={id} disabled={props.disabled}>
        {label}
      </Label>
      <span
        className={css(errorWrapper, {
          width: rest.width,
          backgroundColor: "white",
          display: "flex",
          borderWidth: 1,
          borderRadius: 5,
          overflow: "hidden",
        })}
      >
        {Icon && <div className={iconContainer}>{Icon}</div>}
        <InputComponent
          className={inputClassName}
          {...selectProps({ ...input, id: id }, meta, rest)}
          error={!!error}
          style={{ ...{ borderWidth: 0 }, ...inputStyle }}
        />
        {hint && <Hint>{hint}</Hint>}
      </span>
    </FieldBlock>
  );
};

export default buildFormField;
