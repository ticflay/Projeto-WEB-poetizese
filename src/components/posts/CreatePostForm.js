import React from "react";
import { css } from "glamor";
import TextField from "../library/forms/TextField";
import TextAreaField from "../library/forms/TextAreaField";

const container = css({
  border: "2px solid gray",
  margin: "0 8px",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const buttonMargin = css({ marginTop: "10px" });

export default function CreatePostForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      error={props.error}
      className={container}
    >
      <TextField
        name="title"
        type="text"
        label="Titulo"
        placeholder="Como essa obra vai ser conhecida..."
        required
        fluid
      />
      <TextAreaField
        name="content"
        type="text"
        label="Poema"
        placeholder="Escreva aqui o seu poema..."
        required
        fluid
      />
      <div className={buttonMargin}>
        <button onClick={props.handleSubmit} color="primary" fluid>
          Submeter Poema
        </button>
      </div>
    </form>
  );
}
