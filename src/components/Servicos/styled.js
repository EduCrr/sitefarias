import styled from "styled-components";

export const ServiceArea = styled.div`
  overflow-x: hidden;

  padding-bottom: 8rem;

  background-color: #fbfbff;
  .slick-next:before,
  .slick-prev:before,
  .slick-dots li.slick-active button:before {
    color: #0080ff;
  }
  .slick-dots button:before {
    font-size: 10px;
  }

  img.service {
    height: auto;
    border-radius: 20px;
    width: 500px;
    border: 0;
    background-color: transparent;
  }
  .service {
    margin-top: 6rem;
    h2,
    p {
      text-align: left;
    }
    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .serviceTwo {
    margin-bottom: 30px;
  }
  img {
    margin: auto;
    width: 75px;
    height: 75px;
    background-color: white;
    border: 3px solid #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  @media (max-width: 786px) {
    img.service {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
export const TextArea = styled.div`
  padding-bottom: 4rem;
  scroll-behavior: smooth;

  h1 {
    color: #333b42 !important;
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 35px;
    }
  }
`;
