import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import s from "./styles";
import logo from "../../assets/FATECSorocaba.png";

export default function Header({ navigation }) {
  function Back() {
    navigation.navigate("Home");
  }
  return (
    <View style={s.header}>
      <TouchableOpacity>
        <Image source={logo} style={s.logo} onPress={Back}></Image>
      </TouchableOpacity>
    </View>
  );
}
