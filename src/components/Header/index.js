import React, { useState } from "react";
import { Container, TextHeader, ButtonHeader } from "./style";

export default () => {
  const [activeNav, setActiveNav] = useState(false);
  function down() {
    if (window.scrollY <= 800) {
      setActiveNav(false);
    } else if (window.scrollY > 801) {
      setActiveNav(true);
    }
  }
  window.addEventListener("scroll", down);

  return (
    <>
      <div id="logo"></div>
      <Container>
        <header>
          <nav
            className={
              activeNav
                ? "NavDown navbar fixed-top navbar-expand-lg"
                : "navbar navbar-expand-lg "
            }
          >
            <div className="container">
              <a href="#logo" className="navbar-brand text-white">
                <img className="logo" src="/assets/logo.png" />
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navbar-collapse collapse justify-content-end"
                id="menu"
              >
                <div className="navbar-nav">
                  <a href="#sobre" className="nav-item nav-link">
                    Sobre
                  </a>
                  <a href="#servicos" className="nav-item nav-link">
                    Serviços
                  </a>
                  <a href="#contato" className="nav-item nav-link">
                    Contato
                  </a>
                  <span className="nav-item nav-link">
                    WhatsApp: (64) 98420-0068
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <TextHeader className="container">
          <div className="col-xl-9">
            <h1>Serviços Investigativos</h1>
            <p>
              Traição, localização de pessoas, desvio de mercadorias,
              <br />
              investigações de funcionários e muito mais!
            </p>
            <ButtonHeader href="#contato" cor={true}>
              Contato
            </ButtonHeader>
            <ButtonHeader href="#sobre" cor={false}>
              Sobre
            </ButtonHeader>
          </div>
        </TextHeader>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fbfbff"
            fillOpacity="1"
            border="10"
            d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,154.7C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </>
  );
};
