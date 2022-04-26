import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishtDetailsScreen";
import BasketScreen from "./src/screens/BasckettDetailsScreen";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/>  */}
      {/* <BasketScreen/> */}
      <OrderDetailsScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
