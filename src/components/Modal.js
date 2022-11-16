import React, { useState } from "react";

export default function Modal(props) {
  const [rank, setRank] = useState();
  const [percentile, setPercentile] = useState();
  const [correctAnswers, setCorrectAnswers] = useState();

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Update Scores</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
            width="7%"
          />
        </div>
        <div className="modal-body">
          <div className="my-4">
            <label>
              <span class="text-dark bg-info badge badge-primary badge-pill">
                1
              </span>{" "}
              Update Your rank
            </label>
            <input
              style={{ float: "right" }}
              type={"number"}
              onChange={(e) => {
                setRank(e.target.value);
              }}
            />
          </div>
          <div className="my-4">
            <label>
              <span class="text-dark bg-info badge badge-primary badge-pill">
                2
              </span>{" "}
              Update Your percentile
            </label>
            <input
              style={{ float: "right" }}
              type={"number"}
              onChange={(e) => {
                setPercentile(e.target.value);
              }}
            />
          </div>
          <div className="my-4">
            <label>
              <span class="text-dark bg-info badge badge-primary badge-pill">
                3
              </span>{" "}
              Update Your current score(out of 15)
            </label>
            <input
              style={{ float: "right" }}
              type={"number"}
              onChange={(e) => {
                setCorrectAnswers(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-outline-info"
            onClick={() => {
              props.handleShow(false);
            }}
          >
            Cancel
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              if (rank && percentile && correctAnswers) {
                props.changeScores(rank, percentile, correctAnswers);
              }
            }}
          >
            Save -{">"}
          </button>
        </div>
      </div>
    </div>
  );
}
