import React, { useState, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";
// import * as S from "./styles";

// import api from "../../services/api";
// import isConnected from "../../utils/isConnected";

// //COMPONENTS
import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import FilterCard from "../../components/FilterCard";
// import TaskCard from "../../components/TaskCard";

function Home() {
  return <Header />;

  // const [filterActived, setFilterActived] = useState("all");
  // const [tasks, setTasks] = useState([]);
  // const [redirect, setRedirect] = useState(false);
  // async function loadTasks() {
  //   await api
  //     .get(`/task/filter/${filterActived}/${isConnected}`)
  //     .then((response) => {
  //       setTasks(response.data);
  //     });
  // }
  // useEffect(() => {
  //   loadTasks();
  //   if (!isConnected) setRedirect(true);
  // }, [filterActived, loadTasks]);
  // return (
  //   <S.Container>
  //     {redirect && <Redirect to="/qrcode" />}
  //     <Header clickNotification={Notification} />
  //     router.get("/filter/sistemas_biomedicos", taskController.sb);
  //     <S.FilterArea>
  //       <button type="button" onClick={() => setFilterActived("all")}>
  //         <FilterCard title="Todos" actived={filterActived === "all"} />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("ads_m")}>
  //         <FilterCard title="ADS Manha" actived={filterActived === "ads_m"} />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("ads_nt")}>
  //         <FilterCard
  //           title="ADS Noturno"
  //           actived={filterActived === "ads_nt"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("ea")}>
  //         <FilterCard
  //           title="Eletrônica Automotiva"
  //           actived={filterActived === "ea"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("fm_m")}>
  //         <FilterCard
  //           title="Fabr Mec Manha"
  //           actived={filterActived === "fm_m"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("fm_na")}>
  //         <FilterCard
  //           title="Fabr Mec Noturno A"
  //           actived={filterActived === "fm_na"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("fm_nb")}>
  //         <FilterCard
  //           title="Fabr Mec Noturno B"
  //           actived={filterActived === "fm_nb"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("gq")}>
  //         <FilterCard
  //           title="Gestao Qualidade"
  //           actived={filterActived === "gq"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("log")}>
  //         <FilterCard title="Logística" actived={filterActived === "log"} />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("ma")}>
  //         <FilterCard
  //           title="Manufatura Avanc"
  //           actived={filterActived === "ma"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("po")}>
  //         <FilterCard title="Polimeros" actived={filterActived === "po"} />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("metal")}>
  //         <FilterCard
  //           title="Processos Metalurgicos"
  //           actived={filterActived === "metal"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("pm_m")}>
  //         <FilterCard
  //           title="Projetos Mecanicos Diurno"
  //           actived={filterActived === "pm_m"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("pm_n")}>
  //         <FilterCard
  //           title="Projetos Mecanicos Noturno"
  //           actived={filterActived === "pm_n"}
  //         />
  //       </button>
  //       <button type="button" onClick={() => setFilterActived("sb")}>
  //         <FilterCard
  //           title="Sistemas Biomédicos"
  //           actived={filterActived === "sb"}
  //         />
  //       </button>
  //     </S.FilterArea>
  //     <S.Content>
  //       {tasks.map((t) => (
  //         <Link to={`/task/${t._id}`}>
  //           <TaskCard type={t.type} title={t.title} />
  //         </Link>
  //       ))}
  //     </S.Content>
  //     <Footer />
  //   </S.Container>
  // );
}

export default Home;
