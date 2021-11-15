import React from "react";
import { Container, TextArea, ApproachArea } from "./styled";
export default () => {
  return (
    <Container id="sobre">
      <TextArea>
        <div className="container">
          <div className="row ">
            <h1>Sobre Nós</h1>
            <p>
              Serviços de Investigação Particular nas cidades de: Quirinópolis,
              Gouvelândia, São Simão, Paranaiguara,
              <br /> Inaciolândia, Caçu, Cachoeira Alta, Aparecida do Rio Doce,
              Rio Verde , Santa Helena, Maurilândia, Bom Jesus.
            </p>
          </div>
        </div>
      </TextArea>
      <ApproachArea>
        <div className="container">
          <div className="row ">
            <div className="d-flex  justify-content-around align-items-center space serviceTwo">
              <div className="col-xl-3 sr-left">
                <img alt="" src="/assets/results.png" />
              </div>
              <div className="col-xl-6">
                <h1>01</h1>
                <h2>Experiência & Segurança</h2>
                <p>
                  Hoje quem contrata os serviços do Detetive Farias, conta com
                  qualidade, segurança e experiência em uma equipe focada em
                  obter sucesso nos trabalhos que realiza.
                </p>
              </div>
            </div>
            <div className="d-flex  justify-content-around align-items-center space serviceTwo">
              <div className="col-xl-3 sr-left">
                <img alt="" src="/assets/contract.png" />
              </div>
              <div className="col-xl-6">
                <h1>02</h1>
                <h2>Sigilo Absoluto</h2>
                <p>
                  Nosso trabalho é entregue com total sigilo absoluto, mantendo
                  a confiança de nossos clientes e seriedade em cada operação
                  realizada.
                </p>
              </div>
            </div>
            <div className="d-flex  justify-content-around align-items-center serviceTwo">
              <div className="col-xl-3 sr-left">
                <img alt="" src="/assets/work.png" />
              </div>
              <div className="col-xl-6">
                <h1>03</h1>
                <h2>Resultados Rápidos</h2>
                <p>
                  Priorizamos pela qualidade de nossos trabalhos, mas queremos
                  também trazer os resultados de forma rápida e segura para
                  nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ApproachArea>
    </Container>
  );
};
