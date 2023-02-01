import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ListItem } from "@components/ListItem";
import { Percent } from "@components/Percent";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { formatDate } from "@utils/formatDate";

import { formattedPercent } from "@utils/formatPercent";
import { Trash } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, Content } from "./style";

export type Diet = "inDiet" | "outDiet";

export type Meal = {
  id: string;
  title: string;
  description: string;
  date: number;
  diet: boolean;
};

export interface Data {
  title: string;
  data: Meal[];
}

export function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState<Data[]>([]);
  const [diet, setDiet] = useState<Diet>("inDiet");

  const meals = data.map((meal) => meal.data).flat();
  console.log(meals);
  const totalMealsInDiet = meals.filter((meal) => meal.diet).length;
  const totalMeals = meals.length;

  const percent = totalMealsInDiet / totalMeals;

  const formattedPercentInDiet = formattedPercent(totalMealsInDiet, totalMeals);

  function toToGoStatistics() {
    navigation.navigate("statistics", { data, diet });
  }

  function handleCreateNewMeal() {
    navigation.navigate("createNewMeal");
  }

  function handleEditMeal(meal: Meal) {
    navigation.navigate("meals", { meal });
  }

  useFocusEffect(
    useCallback(() => {
      async function fechMeal() {
        try {
          const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
          if (storage) {
            const parseData = storage ? JSON.parse(storage) : [];
            setData(parseData);
          } else {
            console.log("Error");
          }
        } catch (e) {
          console.log(e);
        }
      }
      fechMeal();
    }, [])
  );

  useEffect(() => {
    if (percent <= 0.5) {
      setDiet("outDiet");
    } else {
      setDiet("inDiet");
    }
  }, [percent]);

  return (
    <Container>
      <Header />
      <Percent
        variant={diet}
        title={totalMeals > 0 ? formattedPercentInDiet : "0,00%"}
        text="das refeições dentro da dieta"
        onPress={toToGoStatistics}
      />
      <Button onPress={handleCreateNewMeal} text="Nova refeição" />
      <Content>
        <SectionList
          sections={data}
          keyExtractor={(meal, index) => meal.title + index}
          renderItem={({ item: meal }) => (
            <ListItem
              title={meal.title}
              variant={meal.diet ? "inDiet" : "outDiet"}
              date={formatDate(meal.date, "time")}
              onPress={() => handleEditMeal(meal)}
            />
          )}
          ListEmptyComponent={<Trash />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </Content>
    </Container>
  );
}
