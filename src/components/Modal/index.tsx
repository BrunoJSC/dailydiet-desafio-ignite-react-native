import { Title } from "@screens/Meals/style";
import { ReactNode } from "react";

import { Overlay, Container, BodyModal } from "./style";

interface Props {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export function Modal({ visible, onClose, title, children }: Props) {
  return (
    <Container visible={visible} transparent={true} onRequestClose={onClose}>
      <Overlay>
        <BodyModal>
          <Title>{title}</Title>
          {children}
        </BodyModal>
      </Overlay>
    </Container>
  );
}
