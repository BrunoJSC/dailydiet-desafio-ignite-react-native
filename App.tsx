import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { StatusBar, View } from "react-native";

import { Routes } from "@routes/index";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <View />}
      </ThemeProvider>
    </>
  );
}
