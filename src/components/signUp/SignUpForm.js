import React from "react";
import LobbyLayout from "../lobby/LobbyLayout";
import { Grid } from "semantic-ui-react";

export default function SignUpForm(props) {
  return (
    <LobbyLayout>
      <form onSubmit={props.handleSubmit} error={props.error}>
        <input
          name="username"
          type="text"
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="Nome de usuário"
          required
          fluid
        />
        <input
          name="email"
          type="email"
          icon="envelope"
          iconPosition="left"
          label="E-mail"
          placeholder="Digite seu e-mail..."
          required
          fluid
        />
        <Grid columns="equal" verticalAlign="bottom" stackable>
          <Grid.Column>
            <input
              name="password"
              type="password"
              icon="lock"
              iconPosition="left"
              label="Senha"
              placeholder="*******"
              required
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <input
              name="confirmPassword"
              type="password"
              icon="lock"
              iconPosition="left"
              label="Confirme sua senha"
              placeholder="*******"
              required
              fluid
            />
          </Grid.Column>
        </Grid>
        <div>
          <button
            color="primary"
            disabled={props.pristine || props.submitting}
            size="large"
            fluid
          >
            Criar conta
          </button>
        </div>
      </form>
      <div>
        <p>
          Já possui uma conta? <a href="/signin">Ir para o login</a>
        </p>
      </div>
    </LobbyLayout>
  );
}