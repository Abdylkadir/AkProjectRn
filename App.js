import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";

// Создаю стек навигатора
const Stack = createStackNavigator();

export default function App() {
  return (
    // Оборачиваю приложение в NavigationContainer для управления навигацией
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Определяю экраны навигации */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
