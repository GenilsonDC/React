import React from "react";
import mapacampus from "../../assets/campus.png";
import { View, Image, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import s from "./styles";
import Footer from "../../components/footer";

export default function Mapa() {
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
      <Footer showLeftButton={true} showRightButton={false} />
    </View>
  );
}
