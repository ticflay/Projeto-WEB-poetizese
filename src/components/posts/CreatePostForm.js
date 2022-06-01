import React from "react";
import { css } from "glamor";
import TextField from "../library/forms/TextField";
import TextAreaField from "../library/forms/TextAreaField";

export default function CreatePostForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      error={props.error}
      className=" m-5  px-4 pt-4 pb-28 bg-white/75 shadow-sm rounded-md relative justify-between min-h-fit "
    >
      <TextField
        name="title"
        type="text"
        label="Título"
        placeholder="Como essa obra vai ser conhecida..."
        required
        fluid
        inputClassName="bg-myColors-white bg-opacity-50 focus:bg-myColors-grey/50"
      />
      <TextAreaField
        name="content"
        type="text"
        label="Poema"
        placeholder="Escreva aqui o seu poema..."
        required
        inputClassName="bg-myColors-white bg-opacity-50 w-full p-2 focus:bg-myColors-grey/50 focus:outline-none"
        fluid
      />
      <div className="w-max absolute right-6 mt-4 ">
        <button
          className="px-4 py-2 border-[1px] rounded-lg bg-myColors-purpleDark text-white font-bold hover:bg-opacity-70  "
          onClick={props.handleSubmit}
          color="primary"
          fluid
        >
          Submeter Poema
        </button>
      </div>
    </form>
  );
}
