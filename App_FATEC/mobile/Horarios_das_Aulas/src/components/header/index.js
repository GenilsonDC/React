import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import s from "./styles";
import logo from "../../assets/FATECSorocaba.png";

export default function Header({ navigation }) {
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={logo} style={s.logo}></Image>
      </TouchableOpacity>
    </View>
  );
}
