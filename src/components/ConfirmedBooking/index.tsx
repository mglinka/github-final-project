import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Container, Top, Confirmation } from "./styles";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "../Button";

const ConfirmedBooking: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [booking, setBooking] = useState<{ date: string, time: string, guests: string, occasion: string }>();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    };
  }, []);

  return (
    <Container {...props}>
      <Top>
        <h1>Dziękuję za rezerwację!</h1>
        <h3 className="lead-txt">Czekamy na Ciebie.</h3>
      </Top>
      {
        booking &&
        <Confirmation>
          <h2>Potwierdzenie</h2>
          <span><strong>Okazja:</strong> {booking.occasion}</span>
          <span><strong>Goście:</strong> {booking.guests}</span>
          <span><strong>Data:</strong> {booking.date}</span>
          <span><strong>Godzina:</strong> {booking.time}</span>
        </Confirmation>
      }

      <Button aria-label="Wróć do strony głównej" onClick={() => navigate("/")}>Powrót do strony głównej</Button>
    </Container>
  );
};

export default ConfirmedBooking;