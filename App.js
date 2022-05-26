import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishtDetailsScreen";
import BasketScreen from "./src/screens/BasckettDetailsScreen";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";
import RootNavigator from "./src/navigation";
import HomeTabs from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>

        {/* <HomeScreen/>  */}
        {/* <BasketScreen/> */}
        {/* <OrderDetailsScreen /> */}
        {/* <RootNavigator>

        </RootNavigator> */}
        <HomeTabs />
        <StatusBar style="light" />
 
    </NavigationContainer>
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
