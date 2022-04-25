import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {

  const [quantity, setQuantity] = useState(1)

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const onPlus = () => {
    setQuantity(quantity + 1)
  }

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2)
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign name="minuscircleo" size={60} color="black" onPress={onMinus}/>
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name="pluscircleo" size={60} color="black" onPress={onPlus}/>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add {quantity} to basket &#8226; ${getTotal()}</Text>
      </View>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, //temp fix
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
  },
  description: {
    color: "gray",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center'
  },
  buttonText: {
  color: 'white',
  fontWeight: '600',
  fontSize: 18
  }
});
