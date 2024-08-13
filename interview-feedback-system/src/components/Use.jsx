import axios from "axios";
import React from "react";

export const Use = () => {
  const getAllFeedback = () => {
    axios
      .get(`http://localhost:8081/api/user/login`, {
        params: {
          Username: "admin7@example.com",
          Password: "password123",
        },
      })
      .then(
        (response) => {
          console.log(response);
          //console.log(response);
        },
        (error) => {
          console.log(error);
          alert("data not Found!..", error);
          // console.log(error);
        }
      );
  };
  return (
    <div>
      test
      <button
        onClick={() => {
          getAllFeedback();
        }}
      ></button>
    </div>
  );
};
