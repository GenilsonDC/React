import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import s, { getPeriodoColor } from "./styles";
import cursoIcons from "../../icons/cursosIcons";

export default function CursoCard({
  img_curso,
  abrevia_curso,
  periodo,
  nome_curso,
  actived,
}) {
  const periodoColor = getPeriodoColor(periodo);

  return (
    <TouchableOpacity style={[s.cursoCard, actived && s.actived]}>
      <View style={s.leftCard}>
        <Image source={cursoIcons[img_curso]} style={s.imagem} />
      </View>
      <View style={s.rightCard}>
        <Text style={s.abrevia}>{abrevia_curso}</Text>
        <Text style={[s.periodo, { color: periodoColor }]}>{periodo}</Text>
      </View>
      <View style={s.bottomCard}>
        <Text style={s.nomeCurso}>{nome_curso}</Text>
      </View>
    </TouchableOpacity>
  );
}
