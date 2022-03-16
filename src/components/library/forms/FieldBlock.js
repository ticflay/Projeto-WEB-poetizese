import React from "react";
import { css } from "glamor";

const blockStyle = css({
  position: "relative",
  "& + &": {
    marginTop: "20px",
  },
});

const inlineStyle = css({
  flex: 1,
  "& + &": {
    marginTop: 0,
    marginLeft: "20px",
  },
});

export default function FieldBlock(props) {
  const { children, inline, ...rest } = props;
  const className = css(blockStyle, inline && inlineStyle);
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
