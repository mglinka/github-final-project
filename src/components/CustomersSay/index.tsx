import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>Opinie</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Michał"
          testimonial="Najlepsza restauracja w okolicy! Każde danie to prawdziwa uczta dla podniebienia. Menu jest zróżnicowane i każdy znajdzie coś dla siebie. Obsługa jest na najwyższym poziomie. Serdecznie polecam!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Ola"
          testimonial="Fantastyczne miejsce! Każde danie przygotowane z najwyższą starannością i smakiem. Atmosfera w restauracji jest bardzo przyjazna, a obsługa miła i profesjonalna. Na pewno wrócę!"
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Jan"
          testimonial="Restauracja godna polecenia! Próbowałem kilku potraw z menu i wszystkie były wyśmienite. Wystrój lokalu jest elegancki, a klimat sprzyja spotkaniom zarówno towarzyskim, jak i biznesowym. Polecam!"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;