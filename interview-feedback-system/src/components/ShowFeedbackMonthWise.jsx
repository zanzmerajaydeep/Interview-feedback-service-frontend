import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { json } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

const START_YEAR = 2001;

export const ShowFeedbackMonthWise = () => {
  const [searchItem, setSearchItem] = useState({
    startDate: "2022-01-01",
    endDate: "2023-12-31",
  });

  const [year1, setYear1] = useState("");
  // const [startDateOfYear, setStartDateOfYear] = useState("....-01-01");
  // const [endDateOfYear, setEndDateOfYear] = useState("....-12-31");
  const starDateOfYear = "....-01-01";
  const endDateOfYear = "....-12-31";

  const currentYear = new Date().getFullYear();

  const calCulationOfYear=()=>{
    console.log(year1);
    console.log("start date of year ", starDateOfYear);
    if (year1 != "") {
      setSearchItem((searchItem) => {
        return {
          ...searchItem,
          startDate: starDateOfYear.replace(
            starDateOfYear.substring(0, 4),
            year1
          ),
          endDate: endDateOfYear.replace(endDateOfYear.substring(0, 4), year1),
        };
      });
    }
  }

  useEffect(() => {
    calCulationOfYear();
    // console.log(year1);
    // console.log("start date of year ", starDateOfYear);
    // if (year1 != "") {
    //   setSearchItem((searchItem) => {
    //     return {
    //       ...searchItem,
    //       startDate: starDateOfYear.replace(
    //         starDateOfYear.substring(0, 4),
    //         year1
    //       ),
    //       endDate: endDateOfYear.replace(endDateOfYear.substring(0, 4), year1),
    //     };
    //   });
    // }
    
  }, [year1]);

  console.log(searchItem);
  // console.log("start date is ", startDateOfYear, "end date is ", endDateOfYear);

  const [FeedbackMonth, setFeedbackMonth] = useState([]);
  const [CountFeedback, setCountFeedback] = useState([]);

 

  const handleForm = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          "http://localhost:8082/api/feedback/getFeedbackCountsByMonth",
          {
            params: {
              startDate: searchItem.startDate,
              endDate: searchItem.endDate,
            },
          }
        );

        // Extract the month numbers and feedback counts from the response data
        const dataRes = response.data;
        console.log(response.data);
        const monthNumbers = Object.keys(dataRes);
        const feedbackCounts = Object.values(dataRes);

        // Set the state directly
        setFeedbackMonth(monthNumbers);
        setCountFeedback(feedbackCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  };

  return (
    <>
      <div>
        {/* [CountFeedback]
    {JSON.stringify(FeedbackMonth,null)}
      {JSON.stringify(CountFeedback,null)} */}
      </div>
      <div>
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
                <Input onChange={(e) => setYear1(e.target.value)} type="select">
                  <option value="" disabled selected>
                    select year
                  </option>
                  {Array.from(
                    { length: currentYear - START_YEAR + 1 },
                    (_, index) => START_YEAR + index
                  ).map((year) => (
                    <option value={year}>{year}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary">
                  Search Date
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>

        <React.Fragment>
          <div className="container-fluid mb-5">
            <h3 className="text-center mt-3 mb-3"></h3>

            <Chart
              type="bar"
              width={1200}
              height={450}
              series={[
                {
                  name: "Number of Interview ",
                  data: CountFeedback,
                },
              ]}
              options={{
                title: {
                  text:
                    "Number of interviews taken in Particular Year " + year1,
                  style: { fontSize: 30 },
                },

                subtitle: {
                  text: "This is BarChart Graph",
                  style: { fontSize: 18 },
                },

                colors: ["#f90000"],
                theme: { mode: "light" },

                xaxis: {
                  tickPlacement: "on",
                  categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  title: {
                    text: "Interview Months",
                    style: { color: "#f90000", fontSize: 30 },
                  },
                },

                yaxis: {
                  labels: {
                    formatter: (val) => {
                      return `${val}`;
                    },
                    style: { fontSize: "15", colors: ["#f90000"] },
                  },
                  title: {
                    text: "Number of Interview Count",
                    style: { color: "#f90000", fontSize: 15 },
                  },
                },

                legend: {
                  show: true,
                  position: "right",
                },

                dataLabels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: {
                    colors: ["#f4f4f4"],
                    fontSize: 15,
                  },
                },
              }}
            ></Chart>
          </div>
        </React.Fragment>
      </div>
    </>
  );
};
