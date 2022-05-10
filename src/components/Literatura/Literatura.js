import React from "react";
import LobbyLayout from "../lobby/LobbyLayout";
import { Link } from "react-router-dom";
import { colors } from "../../lib/themeColors";
import { css } from "glamor";
import Accordion from "react-bootstrap/Accordion";

const styles = {
  container: css({
    margin: 80,
  }),
  headerContainer: css({
    marginBottom: 80,
  }),
  headerH1: css({
    fontWeight: "bolder",
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

const Literatura = (props) => {
  return (
    <LobbyLayout
      navStyle={{ backgroundColor: colors.purple }}
      style={{ backgroundColor: colors.white }}
    >
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
                  Literatura é a arte de criar e compor textos, e existem
                  diversos tipos de produções literárias, como poesia, prosa,
                  literatura de ficção, literatura de romance, literatura
                  médica, literatura técnica, literatura portuguesa, literatura
                  popular, literatura de cordel e etc. A literatura também pode
                  ser um conjunto de textos escritos, sejam eles de um país, de
                  uma personalidade, de uma época, e etc.{" "}
                </p>
                <p>
                  A literatura apresenta diverso gêneros, que agradam vários
                  gostos e que são direcionados públicos diferentes, como por
                  exemplo, a literatura de cordel, literatura infantil, etc.
                  Literatura também é uma disciplina no âmbito escolar, onde os
                  indivíduos estudam diversos autores e suas obras, suas
                  contribuições para a literatura brasileira, normalmente, e
                  temas como a lieratura portuguesa e a literatura barroca
                  também estão presentes, além do colégio, em provas de
                  vestibular.
                </p>
                <footer>
                  Fonte:{" "}
                  <a href="https://www.significados.com.br/literatura/#:~:text=Literatura%20%C3%A9%20a%20arte%20de,literatura%20de%20cordel%20e%20etc.">
                    Significados
                  </a>
                </footer>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2>História da Literatura </h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A história da Literatura pode ser definida como uma ciência
                  que estuda a produção literária de um povo sob um viés
                  cronológico. Quando se estudam diversos autores do passado, em
                  alguma medida, percebe-se certa correlação entre os dizeres de
                  cada escritor, construindo-se movimentos ou escolas
                  literárias. No Brasil, a história da Literatura é dividida da
                  seguinte forma: Quinhentismo Literatura produzida nos
                  primeiros anos do descobrimento do Brasil, por volta do século
                  XVI. É dividido em Literatura de informação e de catequese.
                  Barroco Obras produzidas por volta do século XVII, sob
                  influência do Barroco europeu. Arcadismo Com manifestações
                  líricas, satíricas e épicas, esse movimento ocorreu durante
                  parte do ciclo do ouro no Brasil, no século XVIII. Romantismo
                  Movimento literário das primeiras décadas do século XIX, foi
                  fundador de várias bases da nossa identidade nacional, com
                  autores como Gonçalves Dias e José de Alencar. Realismo /
                  Naturalismo Em oposição ao Romantismo, o Realismo e o
                  Naturalismo ocorreram nos anos finais do século XIX e tiveram
                  como principais expoentes Machado de Assis e Aluísio Azevedo,
                  respectivamente. Simbolismo Movimento poético de revolução nos
                  signos linguísticos e nas percepções sobre o sujeito, o
                  Simbolismo ocorreu no final do século XIX. Parnasianismo
                  Escola literária que buscava atingir o belo clássico por meio
                  do apurado trabalho formal dos poetas, comparados a ourives.
                  Pré-modernismo Embora não seja exatamente um movimento
                  literário, esse período histórico teve autores fundamentais,
                  como Monteiro Lobato, Lima Barreto, Euclides da Cunha e José
                  Lins do Rego. Modernismo Movimento fundado em 1922, durante a
                  Semana de Arte Moderna, é considerado o marco inicial da
                  Literatura brasileira do século XX. Literatura Contemporânea É
                  considerada Literatura contemporânea brasileira toda
                  manifestação literária produzida após os anos de 1945 no
                  Brasil.
                </p>
                <footer>
                  Fonte:{" "}
                  <a href="https://www.portugues.com.br/literatura">História</a>
                </footer>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </LobbyLayout>
  );
};

export default Literatura;
