import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@screens/Home";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { formatDate } from "@utils/formatDate";
import { mealsGetAll } from "./MealsGetAll";

export async function editMeals(id: string, date: number, updatedMeal: Meal) {
  try {
    const storage = await mealsGetAll();
    const dataByData = storage.find(
      (item) => item.title === formatDate(date, "date")
    );
    if (dataByData) {
      const meal = dataByData.data.find((item) => item.id === id);
      if (meal) {
        meal.date = updatedMeal.date;
        meal.description = updatedMeal.description;
        meal.title = updatedMeal.title;
        meal.diet = updatedMeal.diet;
      }
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
    }
  } catch (error) {
    throw error;
  }
}
