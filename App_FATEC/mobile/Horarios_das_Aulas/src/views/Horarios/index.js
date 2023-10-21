import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

export default function Horarios({ navigation, route }) {
  const [dadosHorarios, setDadosHorarios] = useState([]);
  const [semestre, setSemestre] = useState(1);
  const [dia_semana, setDia_semana] = useState(1);
  const [load, setLoad] = useState(false);
  const { filterActived } = route.params;

  async function loadDadosHorarios() {
    setLoad(true);

    await api
      .get(`/task/filter/${filterActived}`, {
        params: {
          semestre,
          dia_semana,
        },
      })
      .then((response) => {
        setDadosHorarios(response.data);
        setLoad(false);
      });
  }

  useEffect(() => {
    loadDadosHorarios();
  }, [semestre, dia_semana]);

  function MapaNav() {
    navigation.navigate("Mapa");
  }
  function HomeNav() {
    navigation.navigate("Home");
  }

  return (
    <View style={s.container}>
      <Header navigation={navigation} />

      <ScrollView
        horizontal={true}
        style={{ marginVertical: 15 }}
        showsVerticalScrollIndicator={true}
      >
        {SemestreIcons.map(
          (sem, index) =>
            sem != null && (
              <TouchableOpacity onPress={() => setSemestre(index)}>
                <Image
                  source={sem}
                  style={[
                    s.semestreIcons,
                    semestre && semestre != index && s.inative_semestre,
                  ]}
                />
              </TouchableOpacity>
            )
        )}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{ marginVertical: 1 }}
      >
        {DiasSemanaIcons.map(
          (dia, index) =>
            dia != null && (
              <TouchableOpacity onPress={() => setDia_semana(index)}>
                <Image
                  source={dia}
                  style={[
                    s.diaSemanaIcons,
                    dia_semana && dia_semana != index && s.inative_dia,
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
        {load ? (
          <ActivityIndicator color={"#AD0404"} size={50} />
        ) : (
          dadosHorarios.map((hr) => (
            <HorariosCard
              horario={hr.horario}
              professor={hr.professor}
              predio={hr.predio}
              sala_lab={hr.sala_lab}
              materia={hr.materia}
            />
          ))
        )}
      </ScrollView>

      <Footer
        showLeftButton={true}
        showRightButton={true}
        navigation={navigation}
      />
    </View>
  );
}
