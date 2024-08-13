import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export const HiringDecisionChart = () => {
  const [Subject, setsubject] = useState([]);

  const [Count, setCount] = useState([]);
  const [TotalFeedback, setTotalFeedback] = useState([]);

  useEffect(() => {
    const sSubject = [];
    const sCount = [];
    const getStudentdata = async () => {
      const reqData = await fetch("http://localhost:8082/api/feedback/decisionCounts");
      const resData = await reqData.json();
      console.log(resData);
      // for(let i=0; i< resData.length; i++)
      // {
      // sSubject.push(resData[i].subject);
      sCount.push(parseInt(resData.Not_Hired));
      sCount.push(parseInt(resData.Hired));
      sCount.push(parseInt(resData.Pending));
      //}
      setsubject(resData);
      setCount(sCount);
      //console.log(resData);
    };

    getStudentdata();
    getAllCount();
  }, []);

  const getAllCount = () => {
    axios.get(`http://localhost:8082/api/feedback/getCountInterviews`, {}).then(
      (response) => {
        setTotalFeedback(response.data);
        console.log(response);
        //console.log(response);
      },
      (error) => {
        alert("data not Found!..", error);
        // console.log(error);
      }
    );
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(Subject, null, 2)}</pre>
      <pre>{JSON.stringify(Count, null, 2)}</pre> */}
      <div>
        <React.Fragment>
          <div
            className="container-fluid mb-3"
            style={{ alignContent: "center" }}
          >
            <h3 className="mt-3"> Hiring Decision Piechart </h3>
            <Chart
              type="pie"
              width={1260}
              height={400}
              series={Count}
              options={{
                title: { text: "Total Interview Feedback : " + TotalFeedback },
                noData: { text: " Not_Hired: " + Count[0] },
                // colors:["#f90000","#f0f"],
                labels: ["Not_Hired", "Hired", "Pending"],
              }}
            ></Chart>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};
