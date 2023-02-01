import { Text } from "@components/ListItem/style";
import { useState } from "react";
import {
  Container,
  Icon,
  OptionContainer,
  OptionWrapper,
  Title,
} from "./style";

interface Props {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

export function RadioButton({ title, options, onSelect }: Props) {
  const [userOption, setUserOption] = useState<string | null>(null);

  function handleOption(option: string) {
    onSelect(option);
    setUserOption(option);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <OptionContainer>
        {options?.map((option) => (
          <OptionWrapper
            key={option}
            variant={option === "Sim" ? "inDiet" : "outDiet"}
            isSelected={option === userOption}
            onPress={() => handleOption(option)}
          >
            <Icon variant={option === "Sim" ? "inDiet" : "outDiet"} />
            <Text>{option}</Text>
          </OptionWrapper>
        ))}
      </OptionContainer>
    </Container>
  );
}
