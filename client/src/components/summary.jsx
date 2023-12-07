import React from "react";
import "./summary.css";

// const resTotalPost = await fetch('http://localhost:3001/numPosts')
// const totalPostObj = await resTotalPost.json();
// const totalPost = totalPostObj.total;

const resAvgTime = await fetch("http://localhost:3001/avgResponseTime");
const avgTimeObj = await resAvgTime.json();
const avgTime = avgTimeObj.avg;

// const resUnansweredQuestions = await fetch('http://localhost:3001/totalUnansweredQuestions')
// const unansweredQuestionsObj = await resUnansweredQuestions.json();
// const unansweredQuestions = unansweredQuestionsObj.total unansweredQuestions.toString()

// const resUnansweredFollowups = await fetch('http://localhost:3001/totalUnansweredFollowups')
// const UnansweredFollowupsObj = await resUnansweredFollowups.json();
// const UnansweredFollowups = UnansweredFollowupsObj.total UnansweredFollowups.toString()

const Summary = () => {
  const warnings = ["420 Unread posts", "2 Unanswered questions", "40 Unanswered followups"];
  const boxStyle = {
    backgroundColor: "lightblue",
    height: "100px", // Adjust the height as needed
    margin: "70px 140px", // Adjust the margins as needed
    borderRadius: "10px", // Adjust the radius as needed
    position: "relative",
    right: "50px",
  };
  return (
    <div>
      <div className={`container`}>
        <div className={`content`}>
          <p className={`title`}>CS 320: Intro to Software Engineering</p>
        </div>
        <div className={`content`}>
          <p className={`instructors`}>
            Instructor: Matthew Rattigan
            <br />
            TA: John Doe
            <br />
            UCA: Jane Doe
          </p>
        </div>
      </div>
      <div className={`container`}>
        <div className={`content`}>
          {warnings.map((item, id) => (
            <a className={`warning`} href={`/`}>
              ⚠ {item}
              <br />
            </a>
          ))}
        </div>
        <div className={`content`}>
          <p className={`class-summary`}>
            {/* {totalPost} total posts */}
            <br />
            575 total contributions
            <br />
            153 instructors' responses
            <br />
            23 students' responses
            <br />
            {avgTime} min avg. response time
          </p>
        </div>
      </div>

      <div style={boxStyle}>
        <div className={"flex-container"}>content</div>
      </div>
      <div style={boxStyle}>
        <div className={"flex-container"}>content</div>
      </div>
    </div>
  );
};

export default Summary;
