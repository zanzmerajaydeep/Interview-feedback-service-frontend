import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const InterviewListAsGraph = () => {

//set all interview feedback
  const [allFeedback, setAllFeedback] = useState([]);



  useEffect(() => {
    getAllFeedback();
  });

  const getAllFeedback = () => {
    axios
      .get(`http://localhost:8082/api/feedback/getAllinterviewFeedback`, {
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
    <div>InterviewListAsGraph</div>
  )
}
