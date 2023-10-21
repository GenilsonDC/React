import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  ActivityIndicator,
} from "react-native";
import s from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CursoCard from "../../components/cursos_card";

export default function Home() {
  const [filterActived, setFilterActived] = useState();
  const navigation = useNavigation();

  useEffect(() => [filterActived]);

  return (
    <View style={s.container}>
      <Header />
      <ScrollView
        style={s.scrow}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <CursoCard
          navigation={navigation}
          filterActived="ads_manha"
          img_curso="1"
          abrevia_curso="ADS"
          periodo="Diurno"
          nome_curso="Análise e desenvolvimento de sistemas"
        />

        <CursoCard
          navigation={navigation}
          filterActived="ads_noturno"
          img_curso="1"
          abrevia_curso="ADS"
          periodo="Noturno"
          nome_curso="Análise e desenvolvimento sistemas"
        />

        <CursoCard
          navigation={navigation}
          filterActived={"fabri_mec_Manha"}
          img_curso="3"
          abrevia_curso="Fabricação Mecânica"
          periodo="Diurno"
          nome_curso="Fabricação Mecânica"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"fabri_Mec_Noturno_A"}
          img_curso="3"
          abrevia_curso="Fabricação Mecânica"
          periodo="Noturno A"
          nome_curso="Fabricação Mecânica"
        />

        <CursoCard
          navigation={navigation}
          filterActived={"fabri_Mec_Noturno_B"}
          img_curso="3"
          abrevia_curso="Fabricação Mecânica"
          periodo="Noturno B"
          nome_curso="Fabricação Mecânica"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"gestao_Qualidade"}
          img_curso="4"
          abrevia_curso="Gestão da Qualidade"
          periodo="Diurno"
          nome_curso="Gestão de Qualidade"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"logistica"}
          img_curso="5"
          abrevia_curso="Logística"
          periodo="Vespertino"
          nome_curso="Logística"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"manufatura_avanc"}
          img_curso="6"
          abrevia_curso="Manufatura Avançada"
          periodo="Diurno"
          nome_curso="Manufatura Avançada"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"polimeros"}
          img_curso="7"
          abrevia_curso="Polímeros"
          periodo="Noturno"
          nome_curso="Polímeros"
        />
        <CursoCard
          navigation={navigation}
          setCursoActived={"processos_metalurgicos"}
          img_curso="8"
          abrevia_curso="Processos Metalúrgicos"
          periodo="Diurno"
          nome_curso="Processos Metalúrgicos"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"projetos_mecanicos_manha"}
          img_curso="9"
          abrevia_curso="Projetos Mecânicos"
          periodo="Diurno"
          nome_curso="Projetos Mecânicos"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"projetos_mecanicos_noturno"}
          img_curso="9"
          abrevia_curso="Projetos Mecânicos"
          periodo="Noturno"
          nome_curso="Projetos Mecânicos"
        />
        <CursoCard
          navigation={navigation}
          filterActived={"sistemas_biomedicos"}
          img_curso="10"
          abrevia_curso="Sistemas Biomédicos"
          periodo="Diurno"
          nome_curso="Sistemas Biomédicos"
        />
      </ScrollView>

      <Footer
        showLeftButton={false}
        showRightButton={true}
        navigation={navigation}
      />
    </View>
  );
}
