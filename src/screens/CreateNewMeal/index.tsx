import { RadioButton } from "@components/RadioButton";
import { useNavigation } from "@react-navigation/native";
import { createNewMeal } from "@storage/meal/createMeal";
import { formatDate } from "@utils/formatDate";

import { useId, useState } from "react";
import {
  Box,
  Button,
  ButtonCreate,
  Container,
  Content,
  Data,
  Divide,
  Form,
  Header,
  Hours,
  Icon,
  Input,
  Label,
  Text,
  TextArea,
  Title,
} from "./style";

export function CreateNewMeal() {
  const navigation = useNavigation();
  const [dietOption, setDietOption] = useState<string | null>(null);

  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<number>(new Date().getTime());

  const mealID = useId();

  async function handleCreateMeal() {
    const newMeal = {
      id: mealID,
      title: mealName,
      description: description,
      date: date,
      diet: dietOption === "Sim" ? true : false,
    };

    try {
      await createNewMeal(newMeal);
      navigation.navigate("home");
    } catch (e) {
      console.log(e);
    }

    navigation.navigate("feedback", {
      variant: dietOption === "Sim" ? "inDiet" : "outDiet",
    });
  }

  function handleHome() {
    navigation.goBack();
  }

  function handleDietOption(option: string) {
    setDietOption(option);
  }

  return (
    <Container>
      <Header>
        <Button onPress={handleHome}>
          <Icon />
        </Button>
        <Title>Nova refeição</Title>
      </Header>
      <Content>
        <Form>
          <Box>
            <Label>Nome</Label>
            <Input value={mealName} onChangeText={setMealName} />
          </Box>
          <Box>
            <Label>Descrição</Label>
            <TextArea value={description} onChangeText={setDescription} />
          </Box>

          <Divide>
            <Box style={{ width: 100 }}>
              <Label>Data</Label>
              <Data value={formatDate(date, "date")} />
            </Box>

            <Box style={{ width: 100 }}>
              <Label>Hours</Label>
              <Hours value={formatDate(date, "time")} />
            </Box>
          </Divide>
          <RadioButton
            title="Está dentro da dieta"
            options={["Sim", "Não"]}
            onSelect={handleDietOption}
          />

          <Box>
            <ButtonCreate onPress={handleCreateMeal}>
              <Text>Cadastrar refeição</Text>
            </ButtonCreate>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
