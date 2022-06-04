import React from "react";
import TextField from "../../../components/library/forms/TextField";
import LoggedLayout from "../../../components/logged/LoggedLayout";

const container = { width: "100%" };
const title = { textAlign: "center", margin: 20 };
const formWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const buttonStyle = {
  marginTop: 20,
};

export default function AccountConfiguration(props) {
  console.log(props?.currentUser);
  return (
    <LoggedLayout>
      <div className="h-screen" style={container}>
        <div className="font-bold text-2xl" style={title}>
          Configurações da Conta
        </div>
        <div style={formWrapper}>
          <form>
            <label htmlFor="username">Nome:</label>
            <TextField name="username" placeholder="Informe seu nome" />
            <label htmlFor="email">E-mail:</label>
            <TextField name="email" placeholder="Informe seu e-mail" />
            <label htmlFor="password">
              Confirmação de senha para habilitar edição:
            </label>
            <TextField name="password" placeholder="Senha" />
            <button
              style={buttonStyle}
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
