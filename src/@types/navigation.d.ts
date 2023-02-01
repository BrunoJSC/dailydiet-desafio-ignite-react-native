import { Data, Diet, Meal } from "@screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        data: Data[];
        diet: Diet;
      };
      createNewMeal: undefined;
      feedback: { variant: Diet };
      editMeal: { meal: Meal };
      meals: { meal: Meal };
    }
  }
}
