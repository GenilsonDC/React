import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
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
  const { filterActived, qtd_semestres } = route.params;

  async function loadDadosHorarios() {
    setLoad(true);

    await api
      .get(`/horarios/filtered`, {
        params: {
          id_curso: filterActived,
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
        {SemestreIcons.map((sem, index) => {
          if (
            (index > 0 && (!qtd_semestres || qtd_semestres === 8)) ||
            (index > 0 && index < 7)
          ) {
            return (
              <TouchableOpacity key={index} onPress={() => setSemestre(index)}>
                <Image
                  source={sem}
                  style={[
                    s.semestreIcons,
                    semestre && semestre !== index && s.inative_semestre,
                  ]}
                />
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{ marginVertical: 1 }}
      >
        {DiasSemanaIcons.map(
          (dia, index) =>
            dia != null && (
              <TouchableOpacity
                key={index}
                onPress={() => setDia_semana(index)}
              >
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
          dadosHorarios.map((hr, index) => (
            <HorariosCard
              key={index}
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
