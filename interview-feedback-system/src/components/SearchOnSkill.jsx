import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { debounce } from "debounce";

export const SearchOnSkill = () => {
  const [searchSkill, setSearchSkill] = useState("");
  const [searchValue, setSearchValue] = useState({});

  //search mwchanism...............
  const handleForm = (e) => {
    setSearchSkill(e.target.value);
  };
  useEffect(
    (e) => {
      axios
        .get(`http://localhost:8082/api/feedback/getCandidateBysearchOnSkill`, {
          params: {
            searchSkill: searchSkill,
          },
        })
        .then(
          (response) => {
            setSearchValue(response.data);
            //console.log(response);
          },
          (error) => {
            alert("search data not Found!..");
            // console.log(error);
          }
        );
    },
    [searchSkill]
  );

  const handleClear = () => {
    // Clear search value
    setSearchValue("");
  };

  return (
    <div>
   
      <div>
        <Form
          onSubmit={handleForm}
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormGroup>
            <Input
              type="text"
              placeholder="Search Skill"
              id="name"
              onChange={debounce(handleForm, 370)}

              // onChange={(e) => {
              //   setSearchFoodName(e.target.value);
              // }}
            />
          
          </FormGroup>
          <FormGroup>
          <Button type="submit" color="primary">
            Search
          </Button>
          </FormGroup>
          
        </Form>
      </div>
      <div className="App" style={{ margin: "10px" }}>
        <h1>Interview Feedbacks</h1>
        <table>
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Email</th>
              <th>Position</th>

              <th>Total Experience</th>
              <th>Relevant Experience</th>
              <th>Date of Interview</th>
              <th>Name of Interviewer</th>
              <th>Hiring Decision</th>
              <th>Technical Skills</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(searchValue).map((item) => (
              <tr key={item._id}>
                <td>{item.candidate.candidateFullName}</td>
                <td>{item.candidate.candidateEmailId}</td>
                <td>{item.candidate.candidatePosition}</td>

                <td>{item.candidate.candidateTotalExp}</td>
                <td>{item.candidate.candidateRelevantExp}</td>
                <td>{item.dateOfInterview}</td>
                <td>{item.interviewerInfo.interviewerName}</td>
                <td>{item.hiringDecision}</td>
                <td>
                  {Array.from(item.technicalEvaluation).map((skill) => (
                    <div key={skill.skill}>
                      <p>
                        {" "}
                        <strong>{skill.skill}:</strong> {skill.skillRating}
                      </p>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
