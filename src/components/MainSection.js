import React from "react";
import Chart from "react-apexcharts";

export default function MainSection(props) {
  const series = [
    {
      name: "Total Attendees",
      data: [4, 20, 42, 16, 26, 32, 35, 20, 35, 15, 0],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "0%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    title: {
      text: "Percentile",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
  };

  const pieSeries = [props.correctAnswers,15-props.correctAnswers];
  const pieOptions = {
    chart: {
      type: "donut",
    },
    labels : ["Solved","Unsolved"],
    datalabels : {
        formatter : function(val){
            return val
        }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "60%" }}>
        <p className="mx-3">Skill Test</p>
        <div class="card mx-auto" style={{ width: "95%" }}>
          <div
            class="card-body"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
              width="7%"
            />
            <div className="mx-5">
              <h5 class="card-title">Hypertext Markup Language</h5>
              <p class="card-text" style={{ fontSize: "12px" }}>
                Questions :08| Duration : 15mins|Submitted on 5 June 2021
              </p>
            </div>
            <button
              className="btn text-light mx-auto my-1"
              style={{
                height: "40px",
                width: "100px",
                backgroundColor: "blue",
              }}
              onClick = {() => {props.handleShow(true)}}
            >
              Update
            </button>
          </div>
        </div>
        <div class="card mx-auto my-3" style={{ width: "95%" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bolder" }}>
              Quick Statistics
            </h5>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                className="mx-auto"
                style={{ width: "33%", borderRight: "1px solid black" }}
              >
                <h5 style={{ textAlign: "center" }}>{props.rank}</h5>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                  Your Rank
                </p>
              </div>
              <div
                className="mx-auto"
                style={{ width: "33%", borderRight: "1px solid black" }}
              >
                <h5 style={{ textAlign: "center" }}>{props.percentile}%</h5>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                  Percentile
                </p>
              </div>
              <div className="mx-auto" style={{ width: "33%" }}>
                <h5 style={{ textAlign: "center" }}>{props.correctAnswers}/15</h5>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                  Correct Answers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-auto my-3" style={{ width: "95%" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bolder" }}>
              Comparison Graph
            </h5>
            <p
              class="card-text"
              style={{ fontSize: "14px", fontWeight: "lighter" }}
            >
              <span style={{ fontWeight: "bold" }}>
                You Scored {props.percentile}% Percentile{" "}
              </span>
              which is lower than the
              <br />
              average Percentile 72% of all the engineers who took this
              assignmnet.
            </p>
            <Chart options={options} series={series} type="line" height={350} />
          </div>
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <div class="card mx-auto my-5" style={{ width: "90%" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bolder" }}>
              Syllabuswise Analysis
            </h5>
            <br />
            <p class="card-text" style={{ fontSize: "16px" }}>
              HTML Tools,Forms,History
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div class="progress my-2" style={{ width: "70%" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p className="mx-5" style={{ fontSize: "18px", color: "blue" }}>
                80%
              </p>
            </div>

            <p class="card-text" style={{ fontSize: "16px" }}>
              Tags & References In HTML
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div class="progress my-2" style={{ width: "70%" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%", backgroundColor: "orange" }}
                ></div>
              </div>
              <p className="mx-5" style={{ fontSize: "18px", color: "orange" }}>
                60%
              </p>
            </div>

            <p class="card-text" style={{ fontSize: "16px" }}>
              Tables & Css Basis
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div class="progress my-2" style={{ width: "70%" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="24"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "24%", backgroundColor: "red" }}
                ></div>
              </div>
              <p className="mx-5" style={{ fontSize: "18px", color: "red" }}>
                24%
              </p>
            </div>

            <p class="card-text" style={{ fontSize: "16px" }}>
              Tables & Css Basis
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div class="progress my-2" style={{ width: "70%" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="96"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "96%", backgroundColor: "greenyellow" }}
                ></div>
              </div>
              <p
                className="mx-5"
                style={{ fontSize: "18px", color: "greenyellow" }}
              >
                96%
              </p>
            </div>
          </div>
        </div>
        <div class="card mx-auto" style={{ width: "90%" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bolder" }}>
              Questions Analysis
              <span
                style={{ color: "blue", float: "right", fontWeight: "lighter" }}
              >
                {props.correctAnswers}/15
              </span>
            </h5>
            <p
              class="card-text"
              style={{ fontSize: "14px", fontWeight: "lighter" }}
            >
              <span style={{ fontWeight: "normal" }}>
                You Scored {props.correctAnswers} Questions Correct Out of 15
              </span>
              <br />
              However It still needs some improvement.
            </p>
            <Chart type = "donut" options = {pieOptions} series = {pieSeries}/>
          </div>
        </div>
      </div>
    </div>
  );
}
