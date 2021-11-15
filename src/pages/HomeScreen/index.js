import React from "react";
import { Container } from "./styled";
import Servicos from "../../components/Servicos";
import Approach from "../../components/Approach";
import SliderContent from "../../components/Slider";

export default () => {
  return (
    <>
      <Container>
        <Approach />
        <Servicos />
        <SliderContent />
      </Container>
    </>
  );
};
