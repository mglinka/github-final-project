import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Column, Image } from "./styles";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Column>
          <h4>Mała<br />Cytrynka</h4>
          <ul>
            <li> <HashLink to="/">Strona Główna</HashLink> </li>
            <li> <HashLink to="/#">Menu</HashLink> </li>
            <li> <HashLink to="/bookings">Rezerwacje</HashLink> </li>
            <li> <HashLink to="/#">Zamów Online</HashLink> </li>
            <li> <HashLink to="/#">Zaloguj się</HashLink> </li>
          </ul>
        </Column>
        <Column>
          <h4>Kontakt</h4>
          <ul>
            <li>
              <address>
                Mała Cytrynka <br />
                444 E Łódź <br />
                LaCalle Street Indiana,<br />
                Pensylwania 5555 <br />
                USA
              </address>
            </li>
            <li> <a href="tel:+1111111111111" target="_blank" rel="external">+11111111111111</a> </li>
            <li> <a href="mail:contact@littlelemon.com" target="_blank" rel="external">contact@littlelemon.com</a> </li>
          </ul>
        </Column>
      </Content>
    </Container>
  );
};

export default Footer;