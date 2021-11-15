import styled from "styled-components";

export const Container = styled.div`
  scroll-behavior: smooth;
  padding-bottom: 8rem;

  background-color: #fbfbff;

  h1,
  h2 {
    color: #333b42;
    text-align: left;
  }
  @media (max-width: 1024px) {
    h1,
    h2,
    p {
      text-align: center;
    }
  }
`;
export const TextArea = styled.div`
  h1 {
    text-align: center;
  }
  padding-bottom: 4rem;
  @media (max-width: 1024px) {
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 35px;
    }
  }
`;
export const ApproachArea = styled.div`
  img {
    height: auto;
    width: 360px;
  }
  h1,
  h2,
  p {
    text-align: left;
  }
  h1 {
    font-size: 90px;
    color: #022248;
  }
  h2 {
    font-weight: bold;
  }
  .space {
    margin-bottom: 6rem;
  }
  @media (max-width: 1024px) {
    .serviceTwo {
      flex-flow: column-reverse;
      img {
        margin-top: 30px;
        width: 300px;
      }
    }
    h1,
    h2,
    p {
      text-align: center;
    }
  }
`;
