import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#474646",
    borderTopWidth: 4,
    borderBlockColor: "#AD0404",
    alignItems: "stretch",
  },

  mapsButton: {
    position: "absolute",
    bottom: 4,
    right: 15,
  },
  mapImage: {
    width: 60,
    height: 60,
  },

  homeButton: {
    position: "absolute",
    bottom: 4,
    left: 15,
  },
  homeImage: {
    width: 60,
    height: 60,
  },
});
export default styles;
