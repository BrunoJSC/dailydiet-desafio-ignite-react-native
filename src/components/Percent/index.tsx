import { Diet } from "@screens/Home";
import { Container, Icon, Text, Title } from "./style";

interface Props {
  title: string;
  text: string;
  variant: Diet;
  onPress: () => void;
}

export function Percent({ title, text, variant, onPress, ...rest }: Props) {
  return (
    <Container variant={variant} onPress={onPress} {...rest}>
      <Icon variant={variant} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}
