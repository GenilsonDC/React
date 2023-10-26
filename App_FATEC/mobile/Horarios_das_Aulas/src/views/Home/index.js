import React, { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import s from "./styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CursoCard from "../../components/cursos_card";
import api from "../../services/api";

export default function Home({ navigation }) {
  const [filterActived, setFilterActived] = useState();
  const [fatec, setFatec] = useState("sorocaba");
  const [dadosCursos, setDadosCursos] = useState([]);
  const [load, setLoad] = useState(false);

  async function loadCursos() {
    setLoad(true);
    await api
      .get("/curso/filter", {
        params: {
          fatec,
        },
      })
      .then((response) => {
        setDadosCursos(response.data);
        setLoad(false);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.error);
      });
  }

  function HorariosNav() {
    navigation.navigate("Horarios", {
      qtd_semestres,
      filterActived,
    });
  }
  function MapaNav() {
    navigation.navigate("Mapa");
  }
  useEffect(() => {
    loadCursos();
  }, [filterActived]);

  return (
    <View style={s.container}>
      <Header />
      <ScrollView
        style={s.scrow}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator color={"#AD0404"} size={50} />
        ) : (
          dadosCursos.map((curso) => (
            <CursoCard
              key={curso._id}
              navigation={navigation}
              img_curso={curso.img_curso}
              abrevia_curso={curso.abrevia_curso}
              periodo={curso.periodo}
              nome_curso={curso.nome_curso}
              filterActived={curso._id}
              qtd_semestres={curso.qtd_semestres}
            />
          ))
        )}
      </ScrollView>

      <Footer
        showLeftButton={false}
        showRightButton={true}
        navigation={navigation}
      />
    </View>
  );
}
