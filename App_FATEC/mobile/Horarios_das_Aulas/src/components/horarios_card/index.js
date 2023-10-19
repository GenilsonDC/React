import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import s from "./styles";
export default function HorariosCard({
  horario,
  sala_lab,
  predio,
  materia,
  professor,
}) {
  return (
    <TouchableOpacity style={s.container}>
      <View style={s.leftCard}>
        <Text style={s.horario}>{horario}</Text>
        <Text style={s.professor}>{professor}</Text>
      </View>
      <View style={s.rightCard}>
        <Text style={s.rightDados}>{predio}</Text>
        <Text style={s.rightDados}>{sala_lab}</Text>
      </View>
      <View style={s.linha} />
      <View style={s.bottomCard}>
        <Text style={s.materia}>{materia}</Text>
      </View>
    </TouchableOpacity>
  );
}
