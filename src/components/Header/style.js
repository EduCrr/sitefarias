import styled from "styled-components";

export const Container = styled.div`
  #logo {
    scroll-behavior: smooth;
  }
  overflow-x: hidden;
  background-image: url("/assets/capa.jpg");
  background-position: left;
  background-size: cover;
  color: white;
  img.logo {
    height: auto;
    width: 180px;
  }
  nav {
    height: auto;
    background-color: white;
    transition: all ease 0.5s;
    transition: all ease 0.7s;
  }
  .NavDown {
    overflow-y: hidden;
    transition: all ease 0.7s;
    background-color: white;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    img.logo {
      width: 150px;
    }
    .navbar-nav a,
    span {
      font-size: 14px;
    }
  }
  .navbar-nav a {
    transition: all ease 0.7s;
    margin: 0px 15px;
    color: #022248;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #022248;

    &:hover {
      color: #022248;
    }
  }
  p {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    background-position: center;

    .navbar-nav a {
      margin: 0px 0px !important;
      transition: all ease 0.7s;
    }
    .navbar-toggler {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(191,193,187)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left;
      &:focus {
        box-shadow: none;
      }
      .NavDown {
        overflow: hidden;
      }
    }
  }
`;
export const TextHeader = styled.div`
  display: flex;
  align-items: center;
  height: 95vh;
  animation-name: moveInLeft;
  animation-duration: 1.8s;
  animation-timing-function: ease-out;
  h1 {
    font-size: 45px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;

    span {
      color: #0080ff;
    }
  }
  p {
    margin-bottom: 40px;
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const ButtonHeader = styled.a`
  background: ${(props) => (props.cor ? `#022248` : "transparent")};
  color: white;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-weight: bold;
  margin-right: 30px;
  border-radius: 5px;
  padding: 13px 55px;

  &:hover {
    color: white;
  }
`;
