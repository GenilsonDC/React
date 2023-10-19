import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  ActivityIndicator,
} from "react-native";
import s from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SemestreIcons from "../../icons/semestreIcons";
import DiasSemanaIcons from "../../icons/diasSemanaIcons";
import HorariosCard from "../../components/horarios_card";
import api from "../../services/api";

export default function Horarios({ navigation }) {
  // const [cursoActived, setCursoActived] = useState();
  // const [dadosHorarios, setDadosHorarios] = useState([]);
  const [semestre, setSemestre] = useState();
  const [dia_semana, setDia_semana] = useState();

  // async function loadDadosHorarios() {
  //   await api
  //     .get(`/task/filter/${cursoActived}`, {
  //       params: {
  //         semestre,
  //         dia_semana,
  //       },
  //     })
  //     .then((response) => {
  //       setDadosHorarios(response.data);
  //     });
  // }

  // useEffect(() => {
  //   // loadDadosHorarios();
  // }, [semestre, dia_semana]);

  return (
    <View style={s.container}>
      <Header />
      <ScrollView
        horizontal={true}
        style={{ marginVertical: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {SemestreIcons.map(
          (sem, index) =>
            sem != null && (
              <TouchableOpacity onPress={() => setSemestre(index)}>
                <Image
                  source={sem}
                  style={[
                    s.semestreIcons,
                    semestre && semestre != index && s.inative,
                  ]}
                />
              </TouchableOpacity>
            )
        )}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}
      >
        {DiasSemanaIcons.map(
          (dia, index) =>
            dia != null && (
              <TouchableOpacity onPress={() => setDia_semana(index)}>
                <Image
                  source={dia}
                  style={[
                    s.diaSemanaIcons,
                    dia_semana && dia_semana != index && s.inative,
                  ]}
                />
              </TouchableOpacity>
            )
        )}
      </ScrollView>

      <ScrollView
        style={s.scrow}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <HorariosCard
          horario="10:00 - 12:00"
          professor="Dimas"
          predio="Predio 23"
          sala_lab="Lab 12"
          materia="Algoritmos e Lógica de Prog."
          // horario={hr.horario}
          // professor={hr.professor}
          // predio={hr.predio}
          // sala_lab={hr.sala_lab}
          // materia={hr.materia}
        />
        <HorariosCard
          horario="10:00 - 12:00"
          professor="Fernando Miranda"
          predio="Predio 23"
          sala_lab="Sala 12"
          materia="Algoritmos e Lógica de Prog."
          // horario={hr.horario}
          // professor={hr.professor}
          // predio={hr.predio}
          // sala_lab={hr.sala_lab}
          // materia={hr.materia}
        />
        <HorariosCard
          horario="10:00 - 12:00"
          professor="Fernando Miranda"
          predio="Predio 23"
          sala_lab="Sala 12"
          materia="Algoritmos e Lógica de Prog."
          // horario={hr.horario}
          // professor={hr.professor}
          // predio={hr.predio}
          // sala_lab={hr.sala_lab}
          // materia={hr.materia}
        />
      </ScrollView>

      <Footer showLeftButton={true} showRightButton={true} />
    </View>
  );
}
