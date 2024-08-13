import axios from "axios";
import React, { useEffect, useState } from "react";
  import { Button, Form, FormGroup, Input } from "reactstrap";
import { debounce } from "debounce";

export const ShowAllByDateRange = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);

  const handleFromDateChange = (e) => {
    const date = e.target.value;
    if (!selectedToDate || date <= selectedToDate) {
      setSelectedFromDate(date);
    }
  };

  const handleToDateChange = (e) => {
    const date = e.target.value;
    if (!selectedFromDate || date >= selectedFromDate) {
      setSelectedToDate(date);
    }
  };
  //---------------------
  const [searchValue, setSearchValue] = useState({});

  //search mwchanism...............
  const handleForm = (e) => {
    e.preventDefault();
    
    axios
      .get(`http://localhost:8082/api/feedback/getFeedbackByDateRange`, {
        params: {
          startDate: selectedFromDate,
          endDate:selectedToDate,
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
  };

  //   const handleClear = () => {
  //     // Clear search value
  //     setSearchValue("");
  //   };
  return (
    <div>
      <div style={{}}>
        <Form
          onSubmit={handleForm}
          style={{
            width: "1200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FormGroup>
            <Input
              type="date"
              placeholder="Select a"
              value={selectedFromDate}
              onChange={handleFromDateChange}
              // min={new Date().toISOString().split("T")[0]}
            />
            </FormGroup>
            <FormGroup>
  
            <Input
              type="date"
              value={selectedToDate}
              onChange={handleToDateChange}
              min={selectedFromDate}
            />
             </FormGroup>
            <FormGroup>


            <Button type="submit" color="primary">
              Search Date
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
