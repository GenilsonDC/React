import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import mapacampus from "../../assets/campus.png";
import { View, Image, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import s from "./styles";
import Footer from "../../components/footer";

export default function Mapa({ navigation }) {
  return (
    <View style={s.container}>
      <ImageZoom
        style={s.zoomArea}
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={440}
        imageHeight={606}
      >
        <Image source={mapacampus} style={s.campus} />
      </ImageZoom>
      <Footer
        showLeftButton={true}
        showRightButton={false}
        navigation={navigation}
      />
    </View>
  );
}
