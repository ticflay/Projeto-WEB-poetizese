import React from "react";
import LobbyLayout from "../lobby/LobbyLayout";
import { Grid } from "semantic-ui-react";
import TextField from "../library/forms/TextField";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function SignUpForm(props) {
  return (
    <LobbyLayout>
      <section
        style={styles.container}
        className="col-xs-12 col-sm-12 col-md-8 col-lg-5"
      >
        <header style={styles.textContainer}>
          <h1 style={styles.textH1}>Bem-vindo(a) </h1>
          <h1 style={styles.textH1}>ao poetizise!</h1>
          <h6 style={styles.textH2}>Faça o seu cadastro para acessar.</h6>
        </header>
        <Form
          style={styles.formContainer}
          onSubmit={props.handleSubmit}
          error={props.error}
        >
          <Form.Group
            style={styles.inputContainer}
            className="col-10 col-md-8 mb-3"
          >
            <TextField
              name="username"
              type="text"
              iconPosition="left"
              placeholder="Nome de Usuário"
              required
              fluid
              Icon={<FaIcons.FaUser />}
            />
          </Form.Group>
          <Form.Group
            style={styles.inputContainer}
            className="col-10 col-md-8 mb-3"
          >
            <TextField
              name="email"
              type="email"
              icon="envelope"
              iconPosition="left"
              placeholder="Digite seu e-mail..."
              required
              fluid
              Icon={<AiIcons.AiFillMail />}
            />
          </Form.Group>
          <Form.Group
            style={styles.inputContainer}
            className=" col-10 col-md-8 mb-3"
          >
            <TextField
              name="password"
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Informe sua senha"
              required
              Icon={<FaIcons.FaLock />}
              fluid
            />
          </Form.Group>
          <Form.Group
            style={styles.inputContainer}
            className="col-10 col-md-8 mb-3"
          >
            <TextField
              name="confirmPassword"
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Confirme sua senha"
              required
              Icon={<FaIcons.FaLock />}
              fluid
            />
          </Form.Group>
          <div className=" col-10 col-md-8 mt-3">
            <Button
              variant="primary"
              size="large"
              fluid
              type="submit"
              style={styles.submitButton}
            >
              Criar conta
            </Button>
          </div>
        </Form>
        <div style={styles.bottomForm}>
          <p>
            Já possui uma conta?{" "}
            <a style={styles.signUp} href="/signin">
              Ir para o login
            </a>
          </p>
        </div>
      </section>
    </LobbyLayout>
  );
}

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
    fontWeight: "bolder",
    fontSize: 18,
    width: "100%",
  },
  formLabel: {},
  formInput: {},
  inputContainer: {
    margin: 10,
  },
  container: {
    backgroundColor: colors.white,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 15,
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
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "center",
  },
  signUp: {
    marginLeft: 10,
    textDecoration: "none",
  },
};
