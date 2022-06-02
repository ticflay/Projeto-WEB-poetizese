import React from "react";
import { Link } from "react-router-dom";
import LobbyLayout from "../lobby/LobbyLayout";
import { css } from "glamor";
import { colors } from "../../lib/themeColors";

const section = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  height: 400,
  paddingLeft: 200,
  paddingRight: 200,
});

const mainSection = css({
  backgroundColor: colors.purpleDark,
});

const h1 = css({
  color: colors.white,
  fontSize: 60,
  fontWeight: "bold",
});

const description = css({
  color: colors.white,
  textAlign: "center",
});

const whoWeAre = css({
  height: 400,
});

const AboutUsPage = (props) => {
  return (
    <LobbyLayout>
      <section className={`${section} ${mainSection}`}>
        <h1 className={h1}>Sobre Nós</h1>
        <h5 className={description}>
          Com o poetizese você terá um lugar para publicar os seus poemas, como
          também conhecer novos. Não deixe mais seus poemas no papel, suscetível
          a danos e perdas, basta apenas se cadastrar, começar a publicar ou
          ler. Tenha seus poemas guardados em lugar seguro. Seja reconhecido
          pela sua obra. Conheça novas obras.
        </h5>
      </section>
      <section className={`${section} ${whoWeAre}`}>
        <h1 className={h1}> Quem somos?</h1>
        <h5 className={description}>
          Somos estudantes do curso de Ciência da Computação na UFRPE, e este
          projeto foi desenvolvido para a disciplina de Desenvolvimento de
          Aplicações para Web. Somos 5 alunos: Samara Freitas, Pedro Araújo,
          Filipe Paz, Rennan Cabral e Wanderson Pessoa.
        </h5>
      </section>
    </LobbyLayout>
  );
};

export default AboutUsPage;
