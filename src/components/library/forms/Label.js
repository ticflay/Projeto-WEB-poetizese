import React from "react";
import { css } from "glamor";

const labelStyles = {
  default: {
    textAlign: "left",
    display: "inline-block",
    cursor: "pointer",
  },
  required: {
    ":after": {
      content: "'*'",
      color: "red",
      verticalAlign: "top",
      marginLeft: "4px",
    },
  },
  disabled: {
    opacity: 0.5,
  },
};

export default function Label(props) {
  const { children, required, disabled, className, ...rest } = props;
  const label = css(
    labelStyles.default,
    required && labelStyles.required,
    disabled && labelStyles.disabled,
    className
  );
  return (
    <label className={label} {...rest}>
      {children}
    </label>
  );
}
