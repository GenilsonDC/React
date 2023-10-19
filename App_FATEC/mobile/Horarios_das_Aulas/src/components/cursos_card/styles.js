import { StyleSheet } from "react-native";

export const DiurnoColor = "#06C3FF";
export const NoturnoColor = "#2D0066";
export const VespertinoColor = "#FF9C06";

export const getPeriodoColor = (periodo) => {
  switch (periodo) {
    case "Diurno":
      return DiurnoColor;
    case "Noturno":
      return NoturnoColor;
    case "Noturno A":
      return NoturnoColor;
    case "Noturno B":
      return NoturnoColor;
    case "Vespertino":
      return VespertinoColor;
    default:
      return "#fff";
  }
};

const styles = StyleSheet.create({
  cursoCard: {
    marginTop: 14,
    width: "95%",
    backgroundColor: "#e2e5e5",
    justifyContent: "space-around",
    height: 120,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    elevation: 5,
  },
  actived: {
    backgroundColor: "#686868",
  },
  imagem: {
    width: "100%",
    height: "100%",
    margin: 3,
    objectFit: "contain",
  },
  leftCard: {
    paddingLeft: 3,
    width: "30%",
    height: "85%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  rightCard: {
    height: "85%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  abrevia: {
    fontWeight: "400",
    marginTop: 12,
    fontSize: 27,
    color: "#373636",
  },
  periodo: { fontSize: 28, fontWeight: "bold" },

  bottomCard: {
    width: "100%",
    height: "19%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  nomeCurso: { color: "#686868", fontSize: 18 },
});

export default styles;
