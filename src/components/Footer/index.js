import React from "react";
import { FooterArea, TextArea, Infos } from "./styled";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default () => {
  let date = new Date();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2adktd4_farias_d",
        "template_0jqxg7h",
        e.target,
        "user_edyP6ZP7ojSEJK29k8qKh"
      )
      .then(
        (result) => {
          toast.success("Email enviado com sucesso!");
        },
        (error) => {
          console.log(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <FooterArea>
      <ToastContainer autoClose={3000} />
      <div className="container" id="contato">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4 sr-footer">
            <TextArea>
              <h1>Entre em contato</h1>
              <p>
                Tem alguma dúvida ou precisa de ajuda? Não deixe de entrar em
                contato comigo!
              </p>
            </TextArea>
            <Infos>
              <img alt="" src="/assets/email.png" />
              <h5>contato@detetivefarias.com.br</h5>
            </Infos>
            <Infos>
              <img alt="" src="/assets/whatsapp.png" />
              <h5>(64) 98420-0068</h5>
            </Infos>
          </div>
          <div className="col-xl-6">
            <form onSubmit={sendEmail}>
              <input placeholder="Nome" required type="text" name="name" />
              <input placeholder="Email" required type="email" name="email" />
              <input placeholder="Telefone" required type="text" name="phone" />
              <input placeholder="Cidade" required type="text" name="city" />
              <textarea
                placeholder="Mensagem"
                name="message"
                required
                type="text"
              ></textarea>
              <button type="submit">Enviar Contato</button>
            </form>
          </div>
          <div className="col-12 text-center space">
            <p>Todos os direitos reservados {date.getFullYear()}</p>
          </div>
        </div>
      </div>
    </FooterArea>
  );
};
