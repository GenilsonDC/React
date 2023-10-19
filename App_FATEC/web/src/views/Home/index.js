import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import api from "../../services/api";

//SEMESTRE e Dias
import DiasSemanaIcons from "../../icons/diasSemanaIcons";
import SemestresIcons from "../../icons/semestreIcons";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CursoCard from "../../components/CursosCards";
import HorariosCards from "../../components/HorariosCards";

function Home() {
  const [filterActived, setFilterActived] = useState("ads_manha");
  const [dadosHorarios, setDadosHorarios] = useState([]);
  const [semestre, setSemestre] = useState();
  const [dia_semana, setDia_semana] = useState();

  async function loadDadosHorarios() {
    await api
      .get(`/task/filter/${filterActived}`, {
        params: {
          semestre,
          dia_semana,
        },
      })
      .then((response) => {
        setDadosHorarios(response.data);
      });
  }

  useEffect(() => {
    loadDadosHorarios();
  }, [filterActived, semestre, dia_semana]);

  return (
    <S.Container>
      <Header ShowBackButton={false} />

      <div className="sidebar">
        <div className="sidebar-scroll">
          <button type="button" onClick={() => setFilterActived("ads_manha")}>
            <CursoCard
              img_curso="1"
              abrevia_curso="ADS"
              periodo="Diurno"
              nome_curso="Análise e desenvolvimento sistemas"
              actived={filterActived === "ads_manha"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("ads_noturno")}>
            <CursoCard
              img_curso="1"
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
              img_curso="2"
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
              img_curso="3"
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
              img_curso="3"
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
              img_curso="3"
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
              img_curso="4"
              abrevia_curso="Gestão da Qualidade"
              periodo="Diurno"
              nome_curso="Gestão de Qualidade"
              actived={filterActived === "gestao_Qualidade"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("logistica")}>
            <CursoCard
              img_curso="5"
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
              img_curso="6"
              abrevia_curso="Manufatura Avançada"
              periodo="Diurno"
              nome_curso="Manufatura Avançada"
              actived={filterActived === "manufatura_avanc"}
            />
          </button>
          <button type="button" onClick={() => setFilterActived("polimeros")}>
            <CursoCard
              img_curso="7"
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
              img_curso="8"
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
              img_curso="9"
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
              img_curso="9"
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
              img_curso="10"
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
          {SemestresIcons.map((sem, index) =>
            index > 0 && (filterActived === "ads_noturno" || index < 7) ? (
              <button type="button" onClick={() => setSemestre(index)}>
                <img
                  src={sem}
                  alt="Semestre"
                  title={`${index}º Semestre`}
                  className={
                    semestre && semestre !== index && "inative_semestre"
                  }
                />
              </button>
            ) : null
          )}
        </S.SemestresIcons>

        <S.DiasSemanaIcons>
          {DiasSemanaIcons.map(
            (dia, index) =>
              index > 0 && (
                <button type="button" onClick={() => setDia_semana(index)}>
                  <img
                    src={dia}
                    alt="dias da semana"
                    title="Dia da semana"
                    className={
                      dia_semana && dia_semana !== index && "inative_dia"
                    }
                  />
                </button>
              )
          )}
        </S.DiasSemanaIcons>

        <S.Horarios>
          {dadosHorarios.map((hr) => (
            <Link
              onClick={() => {
                const confirmed = window.confirm("Deseja editar esse horario?");
                if (confirmed) {
                  window.location.href = `/task/${hr._id}`;
                }
              }}
            >
              <HorariosCards
                horario={hr.horario}
                professor={hr.professor}
                predio={hr.predio}
                sala_lab={hr.sala_lab}
                materia={hr.materia}
              />
            </Link>
          ))}
        </S.Horarios>
      </div>
      <Footer />
    </S.Container>
  );
}

export default Home;
