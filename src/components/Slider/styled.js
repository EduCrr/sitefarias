import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 12rem;

  background-color: #fbfbff;

  h1,
  h4 {
    color: #333b42;
    text-align: center;
  }

  .slick-next:before,
  .slick-prev:before,
  .slick-dots li.slick-active button:before {
    color: #0080ff;
  }
  .slick-dots button:before {
    margin-top: 30px;
    font-size: 10px;
  }
  .sliderArea {
    background-color: white;
    padding: 60px;
    border-radius: 10px;
    width: 95% !important;
    border-bottom: 3px solid #f1f1f1;
    border-left: 3px solid #f1f1f1;
    img {
      margin: auto;
      margin-bottom: 20px;
      width: 50px;
      height: auto;
    }
    h4 {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }
    @media (max-width: 375px) {
      padding: 20px;
    }
  }
`;

export const TextArea = styled.div`
  padding-bottom: 4rem;

  @media (max-width: 786px) {
    h1 {
      font-size: 35px;
    }
  }
`;
