import React from "react";
import { css } from "glamor";
import LobbyLayout from "../lobby/LobbyLayout";
import TextField from "../library/forms/TextField";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { colors } from "../../lib/themeColors";
import NavbarLobby from "../Navbar/NavbarLobby";

const buttonMargin = css({
  marginTop: "10px",
});

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: colors.purpleDark,
    color: colors.white,
    borderWidth: 0,
    alignSelf: "center",
    justifySelf: "center",
    width: 400,
    fontWeight: "bolder",
    fontSize: 18,
  },
  formLabel: {},
  formInput: {},
  inputContainer: {
    margin: 10,
  },
  container: {
    backgroundColor: colors.white,
    width: 600,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 15,
    width: 400,
    alignSelf: "center",
    alignItems: "center",
  },
  textH1: {
    fontWeight: "bold",
    color: colors.purpleDark,
    marginLeft: 5,
  },
  textH2: {
    marginLeft: 5,
    marginTop: 20,
  },
  bottomForm: {
    display: "flex",
    marginLeft: 80,
    marginTop: 15,
  },
  signUp: {
    marginLeft: 10,
    textDecoration: "none",
  },
};

export default function SignInForm(props) {
  return (
    <LobbyLayout>
      <section style={styles.container}>
        <header style={styles.textContainer}>
          <h1 style={styles.textH1}>Bem-vindo(a) </h1>
          <h1 style={styles.textH1}>ao poetizise!</h1>
          <h6 style={styles.textH2}>Entre na sua conta para continuar.</h6>
        </header>
        <Form
          style={styles.formContainer}
          onSubmit={props.handleSubmit}
          error={props.error}
        >
          <Form.Group style={styles.inputContainer} className="mb-3">
            <TextField
              name="email"
              type="email"
              icon="user"
              iconPosition="left"
              placeholder="E-mail ou nome de usuário..."
              required
              fluid
              width={400}
            />
          </Form.Group>
          <Form.Group style={styles.inputContainer} className="mb-3">
            <TextField
              name="password"
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Senha"
              required
              fluid
              width={400}
            />
          </Form.Group>
          <div className={buttonMargin}>
            <Button
              variant="primary"
              size="large"
              fluid
              type="submit"
              style={styles.submitButton}
            >
              Entrar
            </Button>
          </div>
        </Form>
        <div style={styles.bottomForm}>
          <p>Ainda não tem uma conta?</p>
          <a style={styles.signUp} href="/signup">
            {" "}
            Criar minha conta
          </a>
        </div>
      </section>
    </LobbyLayout>
  );
}
