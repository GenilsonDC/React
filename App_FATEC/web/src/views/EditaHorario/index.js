import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  let { id } = useParams();
  const [filterActived, setFilterActived] = useState();
  //-

  const [fatec, setFatec] = useState("sorocaba");
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
  const [horario, setHorario] = useState();

  async function loadHorariosDetails() {
    if (id) {
      await api.get(`/task/${id}`).then((response) => {
        setFatec(response.data.fatec);
        setImg_curso(response.data.img_curso);
        setAbrevia_curso(response.data.abrevia_curso);
        setPeriodo(response.data.periodo);
        setNome_curso(response.data.nome_curso);
        setMateria(response.data.materia);
        setProfessor(response.data.professor);
        setSemestre(response.data.semestre);
        setDia_semana(response.data.dia_semana);
        setPredio(response.data.predio);
        setsala_lab(response.data.sala_lab);
        setHorario(response.data.horario);
      });
    }
  }

  async function Save() {
    if (!img_curso) return alert("⚠️ Você precisa escolher o curso");
    else if (!materia) return alert("⚠️ Você precisa informar a Matéria");
    else if (!professor)
      return alert("⚠️ Você precisa informar o Professor(a)");
    else if (!semestre) return alert("⚠️ Você precisa selecionar o semestre ");
    else if (!dia_semana)
      return alert("⚠️ Você precisa selecionar o dia da semana ");
    else if (!predio) return alert("⚠️ Você precisa informar o Prédio");
    else if (!sala_lab) return alert("⚠️ Você precisa informar a Sala ou Lab");
    else if (!horario) return alert("⚠️ Você precisa informar os Horários");

    if (id) {
      await api

        .put(`/task/${id}`, {
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
        .then((response) => {
          if (response.data && response.data.error) {
            alert(response.data.error);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
          alert(error.response.data.error);
        });
    } else {
      await api
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
        .then((response) => {
          if (response.data && response.data.error) {
            alert(response.data.error);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
          alert(error.response.data.error);
        });
    }
  }

  async function Remove() {
    const res = window.confirm("Deseja realmente EXCLUIR o horário?");
    if (res === true) {
      await api.delete(`/task/${id}`).then(() => navigate("/"));
    }
  }

  useEffect(
    () => {
      loadHorariosDetails();
    },
    semestre,
    dia_semana
  );

  return (
    <S.Container>
      <Header ShowBackButton={true} />

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
              setAbrevia_curso("Gestão da Qualidade");
              setPeriodo("Diurno");
              setNome_curso("Gestão da Qualidade");
              setFilterActived("gestao_Qualidade");
            }}
          >
            <CursoCard
              img_curso="4"
              abrevia_curso="Gestão da Qualidade"
              periodo="Diurno"
              nome_curso="Gestão da Qualidade"
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

        <S.MudaHorarios>
          <S.Materia>Matéria</S.Materia>
          <input
            type="text"
            placeholder="exemplo: Algoritmos e Lógica de Prog. "
            onChange={(e) => setMateria(e.target.value)}
            value={materia}
            maxlength={27}
          ></input>
          <div id="linha"></div>
          <S.Professor>Professor(a)</S.Professor>
          <input
            type="text"
            placeholder="exemplo: Maria Angélica "
            onChange={(e) => setProfessor(e.target.value)}
            value={professor}
            maxLength={16}
          ></input>
          <div id="linha"></div>
          <S.Predio>Prédio</S.Predio>
          <input
            type="text"
            placeholder="exemplo: Prédio 10 "
            onChange={(e) => setPredio(e.target.value)}
            value={predio}
            maxLength={9}
          ></input>
          <div id="linha"></div>
          <S.Salab>Sala/Lab</S.Salab>
          <input
            type="text"
            placeholder="ex: Lab 01 ou Sala 10 *Somente 1 nome"
            onChange={(e) => setsala_lab(e.target.value)}
            value={sala_lab}
            maxlength={7}
          ></input>
          <div id="linha"></div>
          <S.Horario>Horários</S.Horario>
          <input
            type="text"
            placeholder="exemplo: 07:40 - 09:20"
            onChange={(e) => setHorario(e.target.value)}
            value={horario}
            maxLength={13}
          ></input>
          <div id="linha"></div>
        </S.MudaHorarios>

        <S.Buttons>
          <button type="button" className="btnSalvar" onClick={Save}>
            SALVAR
          </button>
          {id && (
            <button type="button" className="btnExcluir" onClick={Remove}>
              EXCLUIR
            </button>
          )}
        </S.Buttons>
      </div>

      <Footer />
    </S.Container>
  );
}

export default EditaHorario;
