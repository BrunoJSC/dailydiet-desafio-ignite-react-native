import { useNavigation, useRoute } from "@react-navigation/native";
import { Data, Diet } from "@screens/Home";
import { formattedPercent } from "@utils/formatPercent";
import {
  Box,
  Boxes,
  Button,
  Card,
  Cards,
  Container,
  Content,
  Header,
  Icon,
  Info,
  Text,
  Title,
} from "./style";

interface RootParams {
  data: Data[];
  diet: Diet;
}

export function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();
  const { diet, data } = route.params as RootParams;

  function handleGoToHome() {
    navigation.goBack();
  }

  const meals = data?.map((meal) => meal.data).flat();
  const totalMeals = meals.length;
  const totalMealsInDiet = meals.filter((meal) => meal.diet).length;
  const totalMealsOutDiet = meals.length - totalMealsInDiet;

  const formattedPercentInDiet = formattedPercent(totalMealsInDiet, totalMeals);
  return (
    <Container>
      <Header variant={diet}>
        <Button onPress={handleGoToHome}>
          <Icon variant={diet} />
        </Button>
        <Title>{totalMeals > 0 ? formattedPercentInDiet : "0,00%"}</Title>
        <Text>das refeições dentro da dieta</Text>
      </Header>
      <Content>
        <Info>Estatísticas gerais</Info>
        <Cards>
          <Card>
            <Title>{totalMealsInDiet}</Title>
            <Text>melhor sequência de pratos dentro da dieta</Text>
          </Card>

          <Card>
            <Title>{totalMeals}</Title>
            <Text>refeições registradas</Text>
          </Card>
        </Cards>
        <Boxes>
          <Box variant="inDiet">
            <Title>{totalMealsInDiet}</Title>
            <Text>refeições dentro da dieta</Text>
          </Box>

          <Box variant="outDiet">
            <Title>{totalMealsOutDiet}</Title>
            <Text>refeições fora da dieta</Text>
          </Box>
        </Boxes>
      </Content>
    </Container>
  );
}
