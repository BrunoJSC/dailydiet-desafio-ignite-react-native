import { Diet } from "@screens/Home";
import { Container, Icon, Text } from "./style";

interface Props {
  title: string;
  variant: Diet;
  date: string;
  onPress: () => void;
}

export function ListItem({ title, variant, date, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Text>{date}</Text>
      <Icon variant={variant} />
      <Text>{title}</Text>
    </Container>
  );
}
