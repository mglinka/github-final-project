import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Specjały w tym tygodniu!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Grecka sałatka"
          price={52.99}
          description="Słynna grecka sałatka z chrupiącą sałatą, papryką, oliwkami i naszym chicagowskim serem feta, udekorowana chrupiącymi grzankami z czosnkiem i rozmarynem."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={33.99}
          description="Nasza bruschetta jest przygotowana z grillowanego chleba, który został natartego czosnkiem i przyprawionego solą oraz oliwą z oliwek."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Deser cytrynowy"
          price={65.99}
          description="To pochodzi prosto z książki z przepisami babci, każdy składnik jest starannie dobrany i tak autentyczny, jak tylko można sobie wyobrazić."
        />
      </Cards>
    </Container>
  );
};

export default Specials;