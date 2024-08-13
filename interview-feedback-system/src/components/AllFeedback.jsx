import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/AllFeedbackCss.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const AllFeedback = () => {
  //set all interview feedback
  const [allFeedback, setAllFeedback] = useState([]);

  // Define default values for sortOrder, fieldName, and pageNo
  const [sortOrder, setDefaultSortOrder] = useState("Asc");
  const [fieldName, setDefaultFieldName] = useState("candidate");
  const [pageNo, setDefaultPageNo] = useState(0);

  //   useEffect(() => {
  //     // Fetch data when component mounts or when sortOrder, fieldName, or pageNo changes
  //     getAllFeedback();
  //   });

  useEffect(() => {
    getAllFeedback();
  }, [sortOrder, fieldName, pageNo]);

  const getAllFeedback = () => {
    axios
      .get(`http://localhost:8082/api/feedback/getAllPS`, {
        params: {
          sortOrder,
          fieldName,
          pageNo,
        },
      })
      .then(
        (response) => {
          setAllFeedback(response.data);
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
    <>
      <div>AllFeedback</div>
     
      {/* <pre>{JSON.stringify(allFeedback, null, 2)}</pre> */}
      <div className="App">
        <h1>Interview Feedback Details</h1>
        <table>
          <thead>
            <tr>
              <th
              onClick={() => {
                setDefaultFieldName("feedbackId");
              }}
              >Feedback ID</th>
              <th
                onClick={() => {
                  setDefaultFieldName("documentNo");
                }}
              >
                Document No
              </th>
              <th
                onClick={() => {
                  setDefaultFieldName("dateOfInterview");
                }}
              >
                DateOfInterview{" "}
              </th>
              <th
                onClick={() => {
                  setDefaultFieldName("candidate");
                }}
              >
                Candidate Name
              </th>
              <th
              onClick={() => {
                setDefaultFieldName("candidate.candidatePosition");
              }}
              >Position</th>
              <th>Hiring Decision</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(allFeedback).map((item) => (
              <tr key={item.feedbackId}>
                <td>{item.feedbackId}</td>
                <td>{item.documentNo}</td>
                <td>{item.dateOfInterview}</td>
                <td>{item.candidate.candidateFullName}</td>
                <td>{item.candidate.candidatePosition}</td>
                <td>{item.hiringDecision}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button
            disabled={pageNo == 0 ? isDisabled : false}
            onClick={() => {
              setDefaultPageNo(pageNo - 1);
            }}
          >
            previous
          </button>
          <button
            disabled={allFeedback.length < 5 ? isDisabled : false}
            onClick={() => {
              setDefaultPageNo(pageNo + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};
