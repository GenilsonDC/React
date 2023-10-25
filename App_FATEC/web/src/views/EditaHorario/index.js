import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import api from "../../services/api";
import arrow from "../../assets/arrow1.gif";

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
  const [dadosCurso, setDadosCurso] = useState([]);
  const [positon_curso, setPositon_curso] = useState();
  const [fatec, setFatec] = useState("sorocaba");

  //-
  const [id_curso, setId_curso] = useState();
  const [materia, setMateria] = useState();
  const [professor, setProfessor] = useState();
  const [semestre, setSemestre] = useState();
  const [dia_semana, setDia_semana] = useState();
  const [predio, setPredio] = useState();
  const [sala_lab, setsala_lab] = useState();
  const [horario, setHorario] = useState();

  async function loadHorariosDetails() {
    if (id) {
      await api.get(`/horario/${id}`).then((response) => {
        setFilterActived(response.data.id_curso);
        setId_curso(response.data.id_curso);
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
    if (!materia) return alert("⚠️ Você precisa informar a Matéria");
    else if (!professor)
      return alert("⚠️ Você precisa informar o Professor(a)");
    else if (!semestre) return alert("⚠️ Selecione o curso e o semestre ");
    else if (!dia_semana)
      return alert("⚠️ Você precisa selecionar o dia da semana ");
    else if (!predio) return alert("⚠️ Você precisa informar o Prédio");
    else if (!sala_lab) return alert("⚠️ Você precisa informar a Sala ou Lab");
    else if (!horario) return alert("⚠️ Você precisa informar os Horários");

    if (id) {
      await api

        .put(`/horario/${id}`, {
          id_curso,
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
            navigate("/", {
              filterActived: filterActived,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          alert(error.response.data.error);
        });
    } else {
      await api
        .post("/horario", {
          id_curso: filterActived,
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
            const res = window.confirm(
              " ✅ HORÁRIO CADASTRADO \n\n Deseja cadastrar um NOVO HORÁRIO ?"
            );
            if (res === true) {
              navigate("/horario");
            } else {
              navigate("/");
            }
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
      await api.delete(`/horario/${id}`).then(() => navigate("/"));
    }
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

  useEffect(
    () => {
      loadHorariosDetails();
    },
    semestre,
    dia_semana
  );

  useEffect(() => {
    loadDadosCursos();
  }, []);

  return (
    <S.Container>
      <Header ShowBackButton={true} />

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
        {filterActived ? (
          <S.SemestresIcons>
            {SemestresIcons.map(
              (sem, index) =>
                index > 0 && (
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
                )
            )}
          </S.SemestresIcons>
        ) : (
          <div className="selecioneCurso">
            <img src={arrow} alt="Logo" /> <h1> Selecione um curso</h1>
          </div>
        )}
        {filterActived ? (
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
        ) : (
          <span> </span>
        )}
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
            maxLength={17}
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
            maxlength={9}
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
