import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Заголовок экрана */}
      <Text style={styles.title}>Информация о продукте</Text>
      <Text style={styles.description}>
        Это подробное представление продукта. Здесь вы можете добавить больше
        информация о продукте, например, цена, описание и изображения.
      </Text>
      {/* Кнопка для добавления продукта в корзину */}
      <Button
        title="Добавить в корзину"
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
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
});
