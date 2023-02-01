import { useNavigation, useRoute } from "@react-navigation/native";
import { Diet } from "@screens/Home";
import { Image } from "react-native";
import positive from "@assets/inDiet.png";
import negative from "@assets/outDiet.png";

import { Button, Container, Text, TextButton, Title } from "./style";

interface ListParams {
  variant: Diet;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { variant } = route.params as ListParams;

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title variant={variant}>
        {variant === "inDiet" ? "Continue assim!" : "Que pena!"}
      </Title>
      <Text>
        {variant === "inDiet"
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </Text>
      <Image source={variant === "inDiet" ? positive : negative} />
      <Button onPress={handleGoHome}>
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  );
}
