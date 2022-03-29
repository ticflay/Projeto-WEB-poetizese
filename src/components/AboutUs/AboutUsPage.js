import React from "react";
import { Link } from "react-router-dom";
import LobbyLayout from "../lobby/LobbyLayout";

const AboutUsPage = (props) => {
  return (
    <LobbyLayout>
      <section>
        <h1 style={{ textAlign: "center" }}>Sobre Nós</h1>
        <h3 style={{ textAlign: "center" }}>
          Com o poetizese você terá um lugar para publicar os seus poemas, como
          também conhecer novos. Não deixe mais seus poemas no papel, suscetível
          a danos e perdas, basta apenas se cadastrar, começar a publicar ou
          ler. Tenha seus poemas guardados em lugar seguro. Seja reconhecido
          pela sua obra. Conheça novas obras.
        </h3>
      </section>
      <Link to="/">Voltar para login</Link>
    </LobbyLayout>
  );
};

export default AboutUsPage;
