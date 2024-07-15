import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Lodz: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Mała cytrynka</h1>
        <h2>Łódź</h2>
        <p className="lead-txt">
          "Mała cytrynka" jest prowadzona przez dwóch braci - Mario i Adrian, którzy przenieśli się do Stanów Zjednoczonych, aby założyć swoją własą restaurację.
        </p>
        <p className="lead-txt">
        Do opracowania menu Mario wykorzystuje rodzinne przepisy oraz swoje doświadczenie jako szef kuchni we Włoszech. Adrian zajmuje się całym marketingiem restauracji i kierował wysiłkiem rozszerzenia menu poza klasyczną kuchnię włoską, dodając dania z innych regionów Morza Śródziemnego.
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </Image>
    </Container>
  );
};

export default Lodz;