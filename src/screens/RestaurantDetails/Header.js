import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import styles from './styles'

const restaurant = restaurants[2];

const RestaurantHeader = ({restaurant}) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -{" "}
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menu}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
