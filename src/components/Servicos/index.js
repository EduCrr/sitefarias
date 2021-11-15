import React from "react";
import { ServiceArea, TextArea } from "./styled";
import Slider from "react-slick";

export default () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <ServiceArea>
        <TextArea id="servicos">
          <div className="container">
            <h1>Nossos Serviços</h1>
            <p>Conheça os serviços que eu posso oferecer para você.</p>
          </div>
        </TextArea>
        <div className="container">
          <div className="row ">
            <Slider {...settings}>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/heart.png" />
                <h5>Casos de infidelidade conjugal.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/location.png" />
                <h5>Localização de bens.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/car.png" />
                <h5>Localização de veículos.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/legal.png" />
                <h5>Investigacao para fins jurídicos.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/people.png" />
                <h5>Dossiê de pessoas física e jurídica.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/frauds.png" />
                <h5>Fraudes contra o INSS.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/data2.png" />
                <h5>Levantamento de dados de pessoas.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/data.png" />
                <h5>Localização e busca de documentos.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/family.png" />
                <h5>Investigação familiar.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/people2.png" />
                <h5>Especialista em localização de pessoas.</h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/car2.png" />
                <h5>
                  Levantamentos de placa de veículos nome e endereço do
                  proprietário.
                </h5>
              </div>
              <div className="col-xl-3 serviceTwo">
                <img alt="" src="/assets/people3.png" />
                <h5>Levantamento da vida pregressa de pessoas.</h5>
              </div>
            </Slider>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-5 service sr-left">
              <h2>Detetive Farias</h2>
              <p>
                Profissional preparado por uma das maiores escolas formadoras de
                Detetives Particulares do país. Pronto para atender qualquer
                necessidade dos clientes, tanto pessoas físicas como pessoas
                jurídicas. Com ética e seriedade, mantendo sigilo absoluto,
                levando ao cliente a solução do seu problema.
              </p>
            </div>
            <div className="col-xl-7 sr-top">
              <img alt="" className="service" src="/assets/teste.jpg" />
            </div>
          </div>
        </div>
      </ServiceArea>
    </>
  );
};
