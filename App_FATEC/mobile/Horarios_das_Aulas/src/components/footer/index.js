import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import s from "./styles";
import maps from "../../assets/maps.png";
import home from "../../assets/home.png";

export default function Footer({
  navigation,
  showLeftButton,
  showRightButton,
}) {
  function Back() {
    navigation.navigate("Home");
  }
  function MapaFatec() {
    navigation.navigate("Mapa");
  }
  return (
    <View style={s.container}>
      {showLeftButton && (
        <TouchableOpacity style={s.homeButton} onPress={Back}>
          <Image source={home} style={s.homeImage}></Image>
        </TouchableOpacity>
      )}

      {showRightButton && (
        <TouchableOpacity style={s.mapsButton} onPress={MapaFatec}>
          <Image source={maps} style={s.mapImage}></Image>
        </TouchableOpacity>
      )}
    </View>
  );
}
