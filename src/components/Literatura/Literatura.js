import React from "react";
import LobbyLayout from "../lobby/LobbyLayout";
import { Link } from "react-router-dom";
import { colors } from "../../lib/themeColors";
import { css } from "glamor";
import Accordion from "react-bootstrap/Accordion";
import LoggedLayout from "../logged/LoggedLayout";

const styles = {
  container: css({
    margin: 80,
  }),
  headerContainer: css({
    marginBottom: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }),
  headerH1: css({
    fontWeight: "bolder",
    fontSize: 20,
  }),
  headerH4: {},
  headerH5: {},
  accordion: css({
    backgroundColor: colors.purple,
    borderWidth: 10,
  }),
  accordionHeader: css({
    backgroundColor: colors.purple,
    color: colors.purple,

    borderWidth: 10,
  }),
  accordionItem: css({
    backgroundColor: colors.purple,
  }),
};

const Content = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerH1}>Literatura</h1>
        <h4 className={styles.headerH4}>
          Quer aprender a ser um escritor melhor? Está no lugar certo!
        </h4>
        <h5 className={styles.headerH5}>
          Nessa seção você encontrará diversas informações sobre literatura!
          Aproveite os conteúdos riquíssimos dos mais diversos autores.
        </h5>
      </div>
      <div>
        <Accordion className={styles.accordion} defaultActiveKey="0" flush>
          <Accordion.Item className={styles.accordionItem} eventKey="0">
            <Accordion.Header className={styles.accordionHeader}>
              <h2>O que é literatura?</h2>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>
                Literatura é a arte de criar e compor textos, e existem diversos
                tipos de produções literárias, como poesia, prosa, literatura de
                ficção, literatura de romance, literatura médica, literatura
                técnica, literatura portuguesa, literatura popular, literatura
                de cordel e etc. A literatura também pode ser um conjunto de
                textos escritos, sejam eles de um país, de uma personalidade, de
                uma época, e etc.{" "}
              </p>
              <p>
                A literatura apresenta diverso gêneros, que agradam vários
                gostos e que são direcionados públicos diferentes, como por
                exemplo, a literatura de cordel, literatura infantil, etc.
                Literatura também é uma disciplina no âmbito escolar, onde os
                indivíduos estudam diversos autores e suas obras, suas
                contribuições para a literatura brasileira, normalmente, e temas
                como a lieratura portuguesa e a literatura barroca também estão
                presentes, além do colégio, em provas de vestibular.
              </p>
              <footer>
                Fonte:{" "}
                <a href="https://www.significados.com.br/literatura/#:~:text=Literatura%20%C3%A9%20a%20arte%20de,literatura%20de%20cordel%20e%20etc.">
                  Significados
                </a>
              </footer>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={styles.accordionItem} eventKey="1">
            <Accordion.Header className={styles.accordionHeader}>
              <h2>História da Literatura </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A história da Literatura pode ser definida como uma ciência que
                estuda a produção literária de um povo sob um viés cronológico.
                Quando se estudam diversos autores do passado, em alguma medida,
                percebe-se certa correlação entre os dizeres de cada escritor,
                construindo-se movimentos ou escolas literárias. No Brasil, a
                história da Literatura é dividida da seguinte forma:
                Quinhentismo Literatura produzida nos primeiros anos do
                descobrimento do Brasil, por volta do século XVI. É dividido em
                Literatura de informação e de catequese. Barroco Obras
                produzidas por volta do século XVII, sob influência do Barroco
                europeu. Arcadismo Com manifestações líricas, satíricas e
                épicas, esse movimento ocorreu durante parte do ciclo do ouro no
                Brasil, no século XVIII. Romantismo Movimento literário das
                primeiras décadas do século XIX, foi fundador de várias bases da
                nossa identidade nacional, com autores como Gonçalves Dias e
                José de Alencar. Realismo / Naturalismo Em oposição ao
                Romantismo, o Realismo e o Naturalismo ocorreram nos anos finais
                do século XIX e tiveram como principais expoentes Machado de
                Assis e Aluísio Azevedo, respectivamente. Simbolismo Movimento
                poético de revolução nos signos linguísticos e nas percepções
                sobre o sujeito, o Simbolismo ocorreu no final do século XIX.
                Parnasianismo Escola literária que buscava atingir o belo
                clássico por meio do apurado trabalho formal dos poetas,
                comparados a ourives. Pré-modernismo Embora não seja exatamente
                um movimento literário, esse período histórico teve autores
                fundamentais, como Monteiro Lobato, Lima Barreto, Euclides da
                Cunha e José Lins do Rego. Modernismo Movimento fundado em 1922,
                durante a Semana de Arte Moderna, é considerado o marco inicial
                da Literatura brasileira do século XX. Literatura Contemporânea
                É considerada Literatura contemporânea brasileira toda
                manifestação literária produzida após os anos de 1945 no Brasil.
              </p>
              <footer>
                Fonte:{" "}
                <a href="https://www.portugues.com.br/literatura">História</a>
              </footer>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={styles.accordionItem} eventKey="2">
            <Accordion.Header className={styles.accordionHeader}>
              <h2>O que é um poema? </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Poema é um texto literário escrito em versos, que são
                distribuídos em estrofes. Esses versos podem ser regulares,
                brancos ou livres. Se for composto por versos regulares, esse
                texto poderá apresentar diversos tipos de rimas. Também pode ser
                narrativo, dramático ou lírico.
              </p>
              <p>Um poema apresenta:</p>
              <p>- Versos: </p>
              Regulares: com métrica e rima;
              <p>Brancos: com métrica e sem rima;</p>
              <p>- Estrofes:</p>
              <p>Dístico: dois versos;</p>
              <p>Terceto: três versos;</p>
              <p>O poema também pode apresentar rima:</p>
              <p>
                Externa: sons semelhantes no final de diferentes versos;
                Interna: rima entre a palavra final de um verso e outra do
                interior do verso seguinte;
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={styles.accordionItem} eventKey="3">
            <Accordion.Header className={styles.accordionHeader}>
              <h2>Tipos de poema </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Poema épico ou narrativo: Conta uma história, em forma de
                versos, e apresenta todas as características do gênero
                narrativo, como narrador, personagens, tempo e espaço.
              </p>
              <p>
                Poema dramático: Não apresenta a voz de um narrador, pois a
                história se desenrola a partir das falas dos personagens,
                estruturadas em forma de versos.
              </p>
              <p>Poema lírico: Manifesta ideias, emoções ou desejos.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className={styles.accordionItem} eventKey="4">
            <Accordion.Header className={styles.accordionHeader}>
              <h2>Como se faz um poema?</h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Para fazer um poema, é preciso responder a estas duas perguntas:
              </p>
              <p>1 - O poema será narrativo, dramático ou lírico?</p>
              <p>
                Se for narrativo ou dramático, você precisa criar um enredo,
                personagens, e definir onde e quando se passará a ação. Além
                disso, deve escolher um tipo de narrador — observador,
                onisciente ou personagem — para o poema narrativo, o que não é
                necessário para o poema dramático. Mas se for lírico, você deve
                ignorar todos esses elementos e se centrar em uma ideia, emoção
                ou desejo sobre o qual quer falar.
              </p>
              <p>2 - O poema terá versos regulares, brancos ou livres?</p>
              <p>
                Se tiver versos regulares ou brancos, é preciso metrificar.
                Então, você vai ter que escolher que tipo de versos regulares
                utilizar. Você pode escolher a redondilha, menor (cinco sílabas)
                ou maior (sete sílabas), o decassílabo (dez sílabas) ou o
                alexandrino (doze sílabas), por exemplo. Esses são os mais
                usados, mas há outras opções.
              </p>
              <p>
                No caso dos versos regulares, é preciso também pensar nas rimas:
                externas, internas, ricas, pobres, emparelhadas, alternadas
                (cruzadas), interpoladas (opostas), mistas, agudas, graves,
                esdrúxulas, perfeitas ou imperfeitas. Já no caso dos versos
                livres, você não precisa se preocupar nem com a metrificação nem
                com as rimas, porém, seja qual for o tipo de versos escolhido, o
                conteúdo deve ser atrativo.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

const Literatura = (props) => {
  return props.lobby ? (
    <LobbyLayout
      navStyle={{ backgroundColor: colors.purple }}
      style={{ backgroundColor: colors.white }}
    >
      <Content />
    </LobbyLayout>
  ) : (
    <LoggedLayout>
      <Content />
    </LoggedLayout>
  );
};

export default Literatura;
