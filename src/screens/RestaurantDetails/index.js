import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from '@react-navigation/native'

import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "../RestaurantDetails/Header";
import styles from './styles'

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const id = route.params.id

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};



export default RestaurantDetailsScreen;
