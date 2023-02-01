import { RadioButton } from "@components/RadioButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Label } from "@screens/CreateNewMeal/style";
import { Meal } from "@screens/Home";
import { editMeals } from "@storage/meal/editMeals";
import { formatDate } from "@utils/formatDate";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Box,
  ButtonSave,
  Container,
  Content,
  Data,
  Divide,
  Header,
  Hours,
  Icon,
  IconSave,
  Input,
  Text,
  TextArea,
} from "./style";

interface ListParams {
  meal: Meal;
}

export function EditMeal() {
  const route = useRoute();
  const { meal } = route.params as ListParams;

  const [mealName, setMealName] = useState<string>(meal.title);
  const [description, setDescription] = useState<string>(meal.description);
  const [date, setDate] = useState(new Date().getHours());
  const [dietOption, setDietOption] = useState<string>(
    meal.diet ? "Sim" : "Não"
  );

  const navigation = useNavigation();

  function handleToGoMeal() {
    navigation.goBack();
  }

  async function editMeal() {
    const editNewMeal = {
      id: meal.id,
      title: mealName,
      description: description,
      date: date,
      diet: dietOption === "Sim" ? true : false,
    };
    try {
      await editMeals(meal.id, meal.date, editNewMeal);
      navigation.navigate("meals", { meal: editNewMeal });
    } catch (error) {
      throw error;
    }
  }

  function handleDietOption(option: string) {
    setDietOption(option);
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={handleToGoMeal}
          style={{ alignSelf: "flex-start" }}
        >
          <Icon />
        </TouchableOpacity>
        <Text>Editar refeição</Text>
      </Header>
      <Content>
        <Box>
          <Input value={mealName} onChangeText={setMealName} />
        </Box>
        <TextArea value={description} onChangeText={(e) => setDescription(e)} />

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
        <ButtonSave onPress={editMeal}>
          <IconSave />
          <Text style={{ color: "#fff" }}>Salvar</Text>
        </ButtonSave>
      </Content>
    </Container>
  );
}
