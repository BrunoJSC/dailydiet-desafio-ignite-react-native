import { Container, Icon, Title } from "./style";

interface Props {
  text: string;
  onPress: () => void;
}

export function Button({ text, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Icon />
      <Title>{text}</Title>
    </Container>
  );
}
