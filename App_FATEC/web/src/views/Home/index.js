import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import api from "../../services/api";
import arrow from "../../assets/arrow.gif";

//SEMESTRE e Dias
import DiasSemanaIcons from "../../icons/diasSemanaIcons";
import SemestresIcons from "../../icons/semestreIcons";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CursoCard from "../../components/CursosCards";
import HorariosCards from "../../components/HorariosCards";

function Home() {
  const [filterActived, setFilterActived] = useState();
  const [dadosHorarios, setDadosHorarios] = useState([]);
  const [dadosCurso, setDadosCurso] = useState([]);
  const [semestre, setSemestre] = useState();
  const [dia_semana, setDia_semana] = useState();
  const [positon_curso, setPositon_curso] = useState();
  const [fatec, setFatec] = useState("sorocaba");

  async function loadDadosHorarios() {
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
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.error);
      });
  }
  async function loadDadosCursos() {
    await api
      .get("/curso/filter", {
        params: {
          fatec,
        },
      })
      .then((response) => {
        setDadosCurso(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.error);
      });
  }

  useEffect(() => {
    loadDadosCursos();
  }, []);

  useEffect(() => {
    loadDadosHorarios();
  }, [filterActived, semestre, dia_semana]);

  return (
    <S.Container>
      <Header ShowBackButton={false} />

      <div className="sidebar">
        <div className="sidebar-scroll">
          {dadosCurso.map((curso, index) => (
            <button
              type="button"
              onClick={() => {
                setFilterActived(curso._id);
                setPositon_curso(index);
              }}
            >
              <CursoCard
                img_curso={curso.img_curso}
                abrevia_curso={curso.abrevia_curso}
                periodo={curso.periodo}
                nome_curso={curso.nome_curso}
                actived={filterActived === curso._id}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="hora">
        {dadosCurso[positon_curso]?.qtd_semestres ? (
          <S.SemestresIcons>
            {SemestresIcons.map((sem, index) =>
              index > 0 && index <= dadosCurso[positon_curso]?.qtd_semestres ? (
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
        ) : (
          <div className="selecioneCurso">
            <img src={arrow} alt="Logo" /> <h1> Selecione um curso</h1>
          </div>
        )}

        <S.DiasSemanaIcons>
          {DiasSemanaIcons.map((dia, index) =>
            index > 0 && index <= dadosCurso[positon_curso]?.qtd_semestres ? (
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
            ) : null
          )}
        </S.DiasSemanaIcons>

        <S.Horarios>
          {dadosHorarios.map((hr) => (
            <Link
              onClick={() => {
                const confirmed = window.confirm("Deseja editar esse horario?");
                if (confirmed) {
                  window.location.href = `/horario/${hr._id}`;
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
