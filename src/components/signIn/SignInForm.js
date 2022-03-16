import React from "react";
import { css } from "glamor";
import LobbyLayout from "../lobby/LobbyLayout";
import TextField from "../library/forms/TextField";

const buttonMargin = css({ marginTop: "10px" });

export default function SignInForm(props) {
  return (
    <LobbyLayout>
      <form onSubmit={props.handleSubmit} error={props.error}>
        <TextField
          name="email"
          type="email"
          icon="user"
          iconPosition="left"
          label="Usuário"
          placeholder="E-mail ou nome de usuário..."
          required
          fluid
        />
        <TextField
          name="password"
          type="password"
          icon="lock"
          iconPosition="left"
          label="Senha"
          placeholder="*******"
          required
          fluid
        />
        <div className={buttonMargin}>
          <button
            onClick={props.handleSubmit}
            color="primary"
            size="large"
            fluid
          >
            Login
          </button>
        </div>
      </form>
      <div>
        <p>Ainda não tem uma conta?</p>
        <a href="/signup">Criar minha conta</a>
      </div>
    </LobbyLayout>
  );
}
