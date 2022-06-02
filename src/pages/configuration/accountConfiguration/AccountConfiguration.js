import React from "react";
import TextField from "../../../components/library/forms/TextField";
import LoggedLayout from "../../../components/logged/LoggedLayout";

export default function AccountConfiguration(props) {
  console.log(props?.currentUser);
  return (
    <LoggedLayout>
      <div className="h-screen">
        <div className="font-bold text-2xl">Configurações da Conta</div>
        <form>
          <label htmlFor="name">Nome:</label>
          <TextField name="name" placeholder="Informe seu nome" />
          <label htmlFor="email">E-mail:</label>
          <TextField name="email" placeholder="Informe seu e-mail" />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.handleSubmit();
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </LoggedLayout>
  );
}
