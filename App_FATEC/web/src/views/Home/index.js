import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";

//SEMESTRE
import DiasSemanaIcons from "../../icons/diasSemanaIcons";
import SemestresIcons from "../../icons/semestreIcons";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CursoCard from "../../components/CursosCards";
import HorariosCards from "../../components/HorariosCards";

function Home() {
  const [filterActived, setFilterActived] = useState("ads_manha");
  const [horarios, SetHorarios] = useState([]);
  const [semestre_selected, setSemestre_selected] = useState(1);
  const [dia_selected, SetDia_selected] = useState(1);

  async function loadHorarios() {
    await api.get(`/task/filter/${filterActived}`).then((response) => {
      SetHorarios(response.data);
    });
  }

  useEffect(() => {
    loadHorarios();
  }, [filterActived]);

  return (
    <S.Container>
      <Header />

      <div className="sidebar">
        <div className="sidebar-scroll">
          <button type="button" onClick={() => setFilterActived("ads_manha")}>
            <CursoCard
              curso="1"
              abrevia_curso="ADS"
              periodo="Diurno"
              nome_curso="Análise e desenvolvimento sistemas"
              actived={filterActived === "ads_manha"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("ads_noturno")}>
            <CursoCard
              curso="1"
              abrevia_curso="ADS"
              periodo="Noturno"
              nome_curso="Análise e desenvolvimento sistemas"
              actived={filterActived === "ads_noturno"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("eletronica_auto")}
          >
            <CursoCard
              curso="2"
              abrevia_curso="Eletrônica Automotiva"
              periodo="Vespertino"
              nome_curso="Eletrônica Automotiva"
              actived={filterActived === "eletronica_auto"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("fabri_mec_Manha")}
          >
            <CursoCard
              curso="3"
              abrevia_curso="Fabricação Mecânica"
              periodo="Diurno"
              nome_curso="Fabricação Mecânica"
              actived={filterActived === "fabri_mec_Manha"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("fabri_Mec_Noturno_A")}
          >
            <CursoCard
              curso="3"
              abrevia_curso="Fabricação Mecânica"
              periodo="Noturno A"
              nome_curso="Fabricação Mecânica"
              actived={filterActived === "fabri_Mec_Noturno_A"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("fabri_Mec_Noturno_B")}
          >
            <CursoCard
              curso="3"
              abrevia_curso="Fabricação Mecânica"
              periodo="Noturno B"
              nome_curso="Fabricação Mecânica"
              actived={filterActived === "fabri_Mec_Noturno_B"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("gestao_Qualidade")}
          >
            <CursoCard
              curso="4"
              abrevia_curso="Gestão de Qualidade"
              periodo="Diurno"
              nome_curso="Gestão de Qualidade"
              actived={filterActived === "gestao_Qualidade"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("logistica")}>
            <CursoCard
              curso="5"
              abrevia_curso="Logística"
              periodo="Vespertino"
              nome_curso="Logística"
              actived={filterActived === "logistica"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("manufatura_avanc")}
          >
            <CursoCard
              curso="6"
              abrevia_curso="Manufatura Avançada"
              periodo="Diurno"
              nome_curso="Manufatura Avançada"
              actived={filterActived === "manufatura_avanc"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("polimeros")}>
            <CursoCard
              curso="7"
              abrevia_curso="Polímeros"
              periodo="Noturno"
              nome_curso="Polímeros"
              actived={filterActived === "polimeros"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("processos_metalurgicos")}
          >
            <CursoCard
              curso="8"
              abrevia_curso="Processos Metalúrgicos"
              periodo="Diurno"
              nome_curso="Processos Metalúrgicos"
              actived={filterActived === "processos_metalurgicos"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("projetos_mecanicos_manha")}
          >
            <CursoCard
              curso="9"
              abrevia_curso="Projetos Mecânicos"
              periodo="Diurno"
              nome_curso="Projetos Mecânicos"
              actived={filterActived === "projetos_mecanicos_manha"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("projetos_mecanicos_noturno")}
          >
            <CursoCard
              curso="9"
              abrevia_curso="Projetos Mecânicos"
              periodo="Noturno"
              nome_curso="Projetos Mecânicos"
              actived={filterActived === "projetos_mecanicos_noturno"}
            />
          </button>
          <button
            type="button"
            onClick={() => setFilterActived("sistemas_biomedicos")}
          >
            <CursoCard
              curso="10"
              abrevia_curso="Sistemas Biomédicos"
              periodo="Diurno"
              nome_curso="Sistemas Biomédicos"
              actived={filterActived === "sistemas_biomedicos"}
            />
          </button>
        </div>
      </div>
      <div className="hora">
        <S.SemestresIcons>
          {SemestresIcons.map(
            (sem, index) =>
              index > 0 && (
                <button
                  type="button"
                  onClick={() => setSemestre_selected(index)}
                >
                  <img
                    src={sem}
                    alt="Semestre"
                    className={
                      semestre_selected &&
                      semestre_selected === index &&
                      "inative_semestre"
                    }
                  />
                </button>
              )
          )}
        </S.SemestresIcons>

        <S.DiasSemanaIcons>
          {DiasSemanaIcons.map(
            (dia, index) =>
              index > 0 && (
                <button type="button" onClick={() => SetDia_selected(index)}>
                  <img
                    src={dia}
                    alt="dias da Semana"
                    className={
                      dia_selected && dia_selected === index && "inative_dia"
                    }
                  />
                </button>
              )
          )}
        </S.DiasSemanaIcons>

        <S.Horarios>
          {horarios.map((h) => (
            <HorariosCards
              horario={h.horario}
              sala_lab={h.sala_lab}
              predio={h.predio}
              materia={h.materia}
              professor={h.professor}
            />
          ))}

          <HorariosCards />
          <HorariosCards />
          <HorariosCards />
        </S.Horarios>
      </div>

      <Footer />
    </S.Container>
  );
}

export default Home;
