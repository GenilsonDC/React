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

function EditaHorario() {
  const [filterActived, setFilterActived] = useState("ads_manha");
  const [horarios, SetHorarios] = useState([]);
  //-
  const [id, setId] = useState();
  const [fatec, SetFatec] = useState("sorocaba");
  const [img_curso, setImg_curso] = useState();
  const [abrevia_curso, setAbrevia_curso] = useState();
  const [periodo, setPeriodo] = useState();
  const [nome_curso, setNome_curso] = useState();
  const [materia, setMateria] = useState();
  const [professor, setProfessor] = useState();
  const [semestre, setSemestre] = useState();
  const [dia_semana, setDia_semana] = useState();
  const [predio, setPredio] = useState();
  const [sala_lab, setsala_lab] = useState();
  const [horario, sethorario] = useState();

  async function Save() {
    api
      .post("/task", {
        fatec,
        img_curso,
        abrevia_curso,
        periodo,
        nome_curso,
        materia,
        professor,
        semestre,
        dia_semana,
        predio,
        sala_lab,
        horario,
      })
      .then(() => alert("✅ Sucesso - Tarefa cadastrada"));
  }

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
          <button
            type="button"
            onClick={() => {
              setImg_curso(1);
              setAbrevia_curso("ADS");
              setPeriodo("Diurno");
              setNome_curso("Análise e desenvolvimento de sistemas");
              setFilterActived("ads_manha");
            }}
          >
            <CursoCard
              img_curso="1"
              abrevia_curso="ADS"
              periodo="Diurno"
              nome_curso="Análise e desenvolvimento sistemas"
              actived={filterActived === "ads_manha"}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setImg_curso(1);
              setAbrevia_curso("ADS");
              setPeriodo("Noturno");
              setNome_curso("Análise e desenvolvimento de sistemas");
              setFilterActived("ads_noturno");
            }}
          >
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
            onClick={() => {
              setImg_curso(2);
              setAbrevia_curso("Eletrônica Automotiva");
              setPeriodo("Vespertino");
              setNome_curso("Eletrônica Automotiva");
              setFilterActived("eletronica_auto");
            }}
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
            onClick={() => {
              setImg_curso(3);
              setAbrevia_curso("Fabricação Mecânica");
              setPeriodo("Diurno");
              setNome_curso("Fabricação Mecânica");
              setFilterActived("fabri_mec_Manha");
            }}
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
            onClick={() => {
              setImg_curso(3);
              setAbrevia_curso("Fabricação Mecânica");
              setPeriodo("Noturno A");
              setNome_curso("Fabricação Mecânica");
              setFilterActived("fabri_Mec_Noturno_A");
            }}
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
            onClick={() => {
              setImg_curso(3);
              setAbrevia_curso("Fabricação Mecânica");
              setPeriodo("Noturno B");
              setNome_curso("Fabricação Mecânica");
              setFilterActived("fabri_Mec_Noturno_B");
            }}
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
            onClick={() => {
              setImg_curso(4);
              setAbrevia_curso("Gestão de Qualidade");
              setPeriodo("Diurno");
              setNome_curso("Gestão de Qualidade");
              setFilterActived("gestao_Qualidade");
            }}
          >
            <CursoCard
              img_curso="4"
              abrevia_curso="Gestão de Qualidade"
              periodo="Diurno"
              nome_curso="Gestão de Qualidade"
              actived={filterActived === "gestao_Qualidade"}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setImg_curso(5);
              setAbrevia_curso("Logística");
              setPeriodo("Vespertino");
              setNome_curso("Logística");
              setFilterActived("logistica");
            }}
          >
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
            onClick={() => {
              setImg_curso(6);
              setAbrevia_curso("Manufatura Avançada");
              setPeriodo("Diurno");
              setNome_curso("Manufatura Avançada");
              setFilterActived("manufatura_avanc");
            }}
          >
            <CursoCard
              img_curso="6"
              abrevia_curso="Manufatura Avançada"
              periodo="Diurno"
              nome_curso="Manufatura Avançada"
              actived={filterActived === "manufatura_avanc"}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setImg_curso(7);
              setAbrevia_curso("Polímeros");
              setPeriodo("Noturno");
              setNome_curso("Polímeros");
              setFilterActived("polimeros");
            }}
          >
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
            onClick={() => {
              setImg_curso(8);
              setAbrevia_curso("Processos Metalúrgicos");
              setPeriodo("Diurno");
              setNome_curso("Processos Metalúrgicos");
              setFilterActived("processos_metalurgicos");
            }}
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
            onClick={() => {
              setImg_curso(9);
              setAbrevia_curso("Projetos Mecânicos");
              setPeriodo("Diurno");
              setNome_curso("Projetos Mecânicos");
              setFilterActived("projetos_mecanicos_manha");
            }}
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
            onClick={() => {
              setImg_curso(9);
              setAbrevia_curso("Projetos Mecânicos");
              setPeriodo("Noturno");
              setNome_curso("Projetos Mecânicos");
              setFilterActived("projetos_mecanicos_noturno");
            }}
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
            onClick={() => {
              setImg_curso(10);
              setAbrevia_curso("Sistemas Biomédicos");
              setPeriodo("Diurno");
              setNome_curso("Sistemas Biomédicos");
              setFilterActived("sistemas_biomedicos");
            }}
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
          {SemestresIcons.map(
            (sem, index) =>
              index > 0 && (
                <button type="button" onClick={() => setSemestre(index)}>
                  <img
                    src={sem}
                    alt="Semestre"
                    className={
                      semestre && semestre === index && "inative_semestre"
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
                <button type="button" onClick={() => setDia_semana(index)}>
                  <img
                    src={dia}
                    alt="dias da Semana"
                    className={
                      dia_semana && dia_semana === index && "inative_dia"
                    }
                  />
                </button>
              )
          )}
        </S.DiasSemanaIcons>

        <S.MudaHorarios>
          <S.Materia>Matéria</S.Materia>
          <input
            type="text"
            placeholder="exemplo:Algoritmos e Lógica de Prog. "
            onChange={(e) => setMateria(e.target.value)}
            value={materia}
          ></input>
          <div id="linha"></div>
          <S.Professor>Professor(a)</S.Professor>
          <input
            type="text"
            placeholder="exemplo:Maria Angélica "
            onChange={(e) => setProfessor(e.target.value)}
            value={professor}
          ></input>
          <div id="linha"></div>
          <S.Predio>Prédio</S.Predio>
          <input
            type="text"
            placeholder="exemplo:Prédio 10 "
            onChange={(e) => setPredio(e.target.value)}
            value={predio}
          ></input>
          <div id="linha"></div>
          <S.Salab>Sala/Lab</S.Salab>
          <input
            type="text"
            placeholder="ex:Lab 01 ou Sala 10 *Somente 1 nome"
            onChange={(e) => setsala_lab(e.target.value)}
            value={sala_lab}
          ></input>
          <div id="linha"></div>
          <S.Horario>Horários</S.Horario>
          <input
            type="text"
            placeholder="exemplo:07:40 - 09:20"
            onChange={(e) => sethorario(e.target.value)}
            value={horario}
          ></input>
          <div id="linha"></div>
        </S.MudaHorarios>

        <S.Buttons>
          <button type="button" className="btnSalvar" onClick={Save}>
            SALVAR
          </button>
          <button type="button" className="btnExcluir">
            EXCLUIR
          </button>
        </S.Buttons>
      </div>

      <Footer />
    </S.Container>
  );
}

export default EditaHorario;
