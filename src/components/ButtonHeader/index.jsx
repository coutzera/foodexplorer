import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";

export function ButtonHeader({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      <PiReceipt />
      <span>{title} (0)</span>
    </Container>
  );
}
