import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import s, { getPeriodoColor } from "./styles";
import cursoIcons from "../../icons/cursosIcons";

export default function CursoCard({
  navigation,
  filterActived,
  img_curso,
  abrevia_curso,
  periodo,
  nome_curso,
  qtd_semestres,
}) {
  const periodoColor = getPeriodoColor(periodo);

  return (
    <TouchableOpacity
      style={s.cursoCard}
      onPress={() =>
        navigation.navigate("Horarios", { filterActived, qtd_semestres })
      }
    >
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
