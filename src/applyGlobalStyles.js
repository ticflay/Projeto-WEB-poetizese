import { css } from "glamor";

export default function applyGlobalStyles() {
  css.global("body", {
    fontFamily: "sans-serif",
    color: "#333333",
    fontWeight: "500",
  });
  css.global("h1, h2, h3, h4, h5, h6", {
    fontFamily: "sans-serif",
    color: "#333333",
    margin: 0,
    padding: 0,
  });
  css.global("h1, h2, h3, h4, h5, h6 + p", {
    fontFamily: "sans-serif",
    color: "#333333",
    marginBottom: "8px",
  });
  css.global("body, p", {
    margin: 0,
    padding: 0,
  });
  css.global("p + p", {
    marginBottom: "8px",
  });
}
