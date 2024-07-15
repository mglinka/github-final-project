import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";
import basketImg from "../../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Strona Główna</HashLink> </li>
          <li> <HashLink to="/#about">Informacje</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Rezerwacje</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Zamów Online</HashLink> </li>
          <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
        </ul>
    </Container>
  );
};

export default Nav;