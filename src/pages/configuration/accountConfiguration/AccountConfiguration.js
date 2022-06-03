import React from "react";
import TextField from "../../../components/library/forms/TextField";
import LoggedLayout from "../../../components/logged/LoggedLayout";

export default function AccountConfiguration(props) {
  console.log(props?.currentUser);
  return (
    <LoggedLayout>
      <div className="h-screen flex flex-col items-center w-full p-10">
        <div className="font-bold text-5xl">Configurações da Conta</div>
        <form
          className="
        w-full h-full flex flex-col items-center m-5"
        >
          <div className="w-2/4">
            <label className="font-bold text-xl" htmlFor="name">
              Nome
            </label>
            <TextField
              className="mb-4"
              name="name"
              placeholder="Informe seu nome"
            />
            <label className="font-bold text-xl" htmlFor="email">
              E-mail:
            </label>
            <TextField
              className="mb-4"
              name="email"
              placeholder="Informe seu e-mail"
            />
            <label className="font-bold text-xl" htmlFor="username">
              Nome de usuário
            </label>
            <TextField
              className="mb-4"
              name="username"
              placeholder="Informe seu nome de usuário"
            />
            <button
              className="w-full bg-myColors-purpleDark p-3 text-white font-extrabold text-xl rounded-lg mt-4"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                props.handleSubmit();
              }}
              disabled={props.pristine || props.submitting}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </LoggedLayout>
  );
}
