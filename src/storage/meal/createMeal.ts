import AsyncStorage from "@react-native-async-storage/async-storage";
import { Data, Meal } from "@screens/Home";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { formatDate } from "@utils/formatDate";

import { mealsGetAll } from "./MealsGetAll";

export async function createNewMeal(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();
    const dataByDate = storedMeals.find(
      (item) => item.title === formatDate(newMeal.date, "date")
    );

    if (dataByDate) {
      dataByDate.data = [...dataByDate.data, newMeal];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
    } else {
      const newData: Data = {
        title: formatDate(newMeal.date, "date"),
        data: [newMeal],
      };
      const updatedData = [...storedMeals, newData];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
    }
  } catch (error) {
    throw error;
  }
}
