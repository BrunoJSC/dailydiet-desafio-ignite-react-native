import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNewMeal } from "@screens/CreateNewMeal";
import { EditMeal } from "@screens/EditMeal";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { Meals } from "@screens/Meals";

import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createNewMeal" component={CreateNewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="meals" component={Meals} />
    </Navigator>
  );
}
