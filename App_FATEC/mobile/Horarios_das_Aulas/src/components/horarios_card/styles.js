import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    width: "95%",
    height: 140,
    backgroundColor: "#e2e5e5",
    margin: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadios: 0,
    elevation: 5,
  },

  rightCard: {
    display: "flex",
    height: "71%",
    width: "40%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  rightDados: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#ad0404",
    width: "100%",
    textAlign: "center",
  },

  leftCard: {
    display: "flex",
    height: "71%",
    width: "60%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  horario: {
    fontSize: 24,
    fontWeight: "500",
    color: "#474646",
    width: "100%",
    textAlign: "center",
  },
  professor: {
    fontSize: 27,
    marginTop: 6,
    color: "#474646",
    width: "100%",
    textAlign: "center",
  },

  linha: {
    backgroundColor: "#686868",
    height: 1.6,
    width: "95%",
  },

  bottomCard: {
    width: "100%",
    height: "29%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  materia: {
    color: "#ad0404",
    width: "100%",
    textAlign: "center",

    fontSize: 26.5,
  },
});
export default styles;
