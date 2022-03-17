import React from "react";
import { css } from "glamor";

const hintStyles = css({
  fontSize: 10,
  marginTop: "4px",
  opacity: 0.5,
});

const extraSpace = css({
  marginTop: "8px",
});

export default function Hint(props) {
  const { children, spaced, italic, className, ...rest } = props;
  return (
    <div className={css(hintStyles, className, spaced && extraSpace)} {...rest}>
      {children}
    </div>
  );
}
