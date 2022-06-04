import React from "react";
import { css } from "glamor";
import TextField from "../../library/forms/TextField";
import TextAreaField from "../../library/forms/TextAreaField";
import DropdownField from "../../library/forms/DropdownField";

const dropdownClass = css({
  marginTop: 20,
  width: "50%",
  "> select": {
    width: "100%",
  },
});

export default function PostForm(props) {
  console.log(props);
  return (
    <form
      onSubmit={props.handleSubmit}
      error={props.error}
      className=" my-5 px-4 pt-4 pb-28 bg-white/75 shadow-sm rounded-md relative justify-between min-h-fit "
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
      <div className={dropdownClass}>
        <DropdownField
          name="category_id"
          label="Categoria"
          placeholder="Selecione a Categoria"
          items={props.categories}
        />
      </div>
      <div className="w-max absolute right-6 mt-4 ">
        {props?.edit && (
          <button
            type="buttom"
            className="px-4 py-2 border-[1px] rounded-lg text-red-700 bg-red-400 font-bold hover:bg-opacity-70  "
            onClick={props?.cancelEdit}
          >
            Cancelar
          </button>
        )}
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
