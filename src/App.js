import logo from "./logo.svg";
import "./App.css";
import LeftHandSideBar from "./components/LeftHandSideBar";
import MainSection from "./components/MainSection";
import { useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [correctAnswers, setCorrectAnswers] = useState(7);

  const [showModal, setShowModal] = useState(false);

  const handleShow = (show) => {
    setShowModal(show);
  };

  const changeScores = (changedRank,changedPercentile,changedCorrect) => {
    setRank(changedRank)

    setPercentile(changedPercentile)

    setCorrectAnswers(changedCorrect)

    setShowModal(false)
  }

  return (
    <>
    <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "15%",borderRight : "1px solid whitesmoke" }}>
          <LeftHandSideBar />
        </div>
        <div style={{ width: "85%" }}>
          <MainSection
            rank={rank}
            percentile={percentile}
            correctAnswers={correctAnswers}
            handleShow={handleShow}
          />
        </div>
      </div>
      {showModal && <Modal handleShow={handleShow} changeScores = {changeScores}/>}
    </>
  );
}

export default App;
