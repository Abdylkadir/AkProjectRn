import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Заголовок экрана */}
      <Text style={styles.title}>Добро пожаловать в мебельный магазин!</Text>
      {/* Кнопка для перехода на экран продукта */}
      <Button
        title="Посмотреть продукты"
        onPress={() => navigation.navigate("Product")}
        color="#841584"
      />
      <View style={styles.spacer} />
      {/* Кнопка для перехода в корзину */}
      <Button
        title="Перейти в корзину"
        onPress={() => navigation.navigate("Cart")}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  spacer: {
    height: 20,
  },
});
