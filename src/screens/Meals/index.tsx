import { Modal } from "@components/Modal";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Meal } from "@screens/Home";
import { deleteMeal } from "@storage/meal/deleteMeal";
import { formatDate } from "@utils/formatDate";
import { useState } from "react";

import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Icon,
  Title,
  Content,
  Box,
  Card,
  Circle,
  ButtonEdit,
  EditIcon,
  ButtonRemove,
  TrashIcon,
  ButtonExclude,
  ButtonCancel,
} from "./style";

interface ListParam {
  meal: Meal;
}

export function Meals() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as ListParam;

  const [openModal, setOpenModal] = useState(false);

  async function handleRemove(id: string, date: number) {
    try {
      await deleteMeal(id, date);
      setOpenModal(false);
      navigation.goBack();
    } catch (e) {
      console.log(e);
    } finally {
      setOpenModal(false);
    }
  }

  return (
    <Container>
      <Header variant={meal.diet ? "inDiet" : "outDiet"}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ alignSelf: "flex-start" }}
        >
          <Icon variant={meal.diet ? "inDiet" : "outDiet"} />
        </TouchableOpacity>
        <Title>Editar refeição</Title>
      </Header>
      <Content>
        <Box>
          <Title>{meal.title}</Title>
        </Box>
        <Box>
          <Text>{meal.description}</Text>
        </Box>
        <Box>
          <Title>Data e hora</Title>
          <Text>
            {formatDate(meal.date, "date")} as {formatDate(meal.date, "time")}
          </Text>
        </Box>
        <Box>
          <Card>
            <Circle variant={meal.diet ? "inDiet" : "outDiet"} />
            <Text>{meal.diet ? "dentro da dieta" : "fora da dieta"}</Text>
          </Card>
        </Box>

        <Modal visible={openModal} onClose={() => setOpenModal(false)}>
          <Text style={{ textAlign: "center" }}>
            Deseja realmente excluir o registro da refeição?
          </Text>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 40,
            }}
          >
            <ButtonCancel>
              <Text>Cancelar</Text>
            </ButtonCancel>

            <ButtonExclude onPress={() => handleRemove(meal.id, meal.date)}>
              <Text style={{ color: "#fff" }}>Sim, excluir</Text>
            </ButtonExclude>
          </Box>
        </Modal>
        <ButtonEdit onPress={() => navigation.navigate("editMeal", { meal })}>
          <EditIcon />
          <Text style={{ color: "#fff" }}>Editar refeição</Text>
        </ButtonEdit>
        <ButtonRemove onPress={() => setOpenModal(true)}>
          <TrashIcon />
          <Text>Excluir refeiçao</Text>
        </ButtonRemove>
      </Content>
    </Container>
  );
}
