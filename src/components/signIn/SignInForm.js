import React from "react";
import { css } from "glamor";
import LobbyLayout from "../lobby/LobbyLayout";
import TextField from "../library/forms/TextField";
import { Link } from "react-router-dom";

const buttonMargin = css({ marginTop: "10px" });

export default function SignInForm(props) {
  return (
    <LobbyLayout>
      <section>
        <Link to="/about">Sobre nós</Link>
        <Link to="/literatura">Literatura</Link>
      </section>
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
          <button color="primary" size="large" fluid type="submit">
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
