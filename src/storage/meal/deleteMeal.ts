import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@screens/Home";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { formatDate } from "@utils/formatDate";
import { mealsGetAll } from "./MealsGetAll";

export async function deleteMeal(id: string, date: number) {
  try {
    const storage = await mealsGetAll();
    const dataByData = storage.find(
      (item) => item.title === formatDate(date, "date")
    );

    if (dataByData) {
      const filter = dataByData.data.filter((item) => item.id !== id);
      dataByData.data = filter;
      const updatedMeal = storage.filter(
        (item) => item.title !== dataByData.title
      );
      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(filter.length === 0 ? updatedMeal : storage)
      );
    }
  } catch (error) {
    throw error;
  }
}
