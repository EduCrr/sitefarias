import styled from "styled-components";

export const FooterArea = styled.div`
  #contato {
    scroll-behavior: smooth;
  }
  padding-top: 8rem;
  padding-bottom: 4rem;

  background: radial-gradient(
    at left center,
    rgb(115 145 169) 40%,
    rgb(82 112 136) 85%
  );
  form {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    input,
    textarea {
      margin-bottom: 30px;
      width: 100%;
      font-style: 14px;
      padding: 12px;
      border: 1px solid #b1b1b166;
      border-radius: 10px;
      outline: 0;
      transition: all ease 0.4s;
      &:focus {
        border: 1px solid #333;
        color: #333;
      }
      &.check {
        width: 13px;
      }
    }
    button {
      color: white;
      background: rgb(82 112 136);
      font-style: 14px;
      padding: 12px;
      border: 0px;
      border-radius: 10px;
      outline: 0;
      width: 50%;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      transition: all ease 0.4s;
    }
    textarea {
      height: 150px;
      resize: none;
    }
    @media (max-width: 375px) {
      button {
        width: 100%;
      }
    }
  }
  .space {
    margin-top: 6rem;
  }
`;
export const TextArea = styled.div`
  padding-bottom: 3rem;
  h1 {
    text-align: left;
    color: white;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 50px;
  img {
    width: 40px;

    height: auto;
  }
  h5 {
    margin-left: 20px;
  }
`;
