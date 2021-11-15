import React from "react";
import { Container, TextArea } from "./styled";

import Slider from "react-slick";
export default () => {
  let settings = {
    arrows: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
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
    <Container>
      <TextArea>
        <div className="container">
          <h1>Dúvidas Frequentes</h1>
        </div>
      </TextArea>
      <div className="container sr-top">
        <Slider {...settings}>
          <div className="sliderArea ">
            <img alt="" src="/assets/quest.png" />
            <h4>Locais de atuação?</h4>
            <p>
              Gouvelandia , São Simão, Paranaiguara, Inaciolandia, Caçu,
              Cachoeira Alta, Aparecida Do Rio Doce, Rio Verde, Santa Helena,
              Maurilandia, Bom Jesus, Quirinopolis Goiás.
            </p>
          </div>
          <div className="sliderArea">
            <img alt="" src="/assets/quest.png" />
            <h4>Por que contratar um detetive?</h4>
            <p>
              As pessoas não suportam mais serem enganadas, por esta razão os
              serviços do Detetive Particular é fundamental na obtençao de
              provas para o desenrolar dos fatos.
            </p>
          </div>
          <div className="sliderArea">
            <img alt="" src="/assets/quest.png" />
            <h4>Desvios de mercadorias?</h4>
            <p>
              Provas materiais vêm se tornando frequêntes nesta área.
              Empresários dispostos a manter credibilidade em seus negócios são
              os que contratam nossos serviços.
            </p>
          </div>
        </Slider>
      </div>
    </Container>
  );
};
