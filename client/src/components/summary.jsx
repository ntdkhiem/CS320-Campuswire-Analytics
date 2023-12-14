import React from "react";
import "./summary.css";

const resTotalPost = await fetch('http://localhost:3001/numPosts')
const totalPostObj = await resTotalPost.json();
const totalPost = totalPostObj.total;

const resAvgTime = await fetch("http://localhost:3001/avgResponseTime");
const avgTimeObj = await resAvgTime.json();
const avgTime = avgTimeObj.avg;

const resUnansweredQuestions = await fetch('http://localhost:3001/numUnansweredQuestions')
const unansweredQuestionsObj = await resUnansweredQuestions.json();
const unansweredQuestions = unansweredQuestionsObj.total

const resFirst = await fetch('http://localhost:3001/top3/first')
const first = await resFirst.json();


const Summary = () => {
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
          <p className={`class-summary`}>
            {totalPost} total posts
            <br />
            {avgTime} hour avg. response time
            <br />
            <span className={`warning`}>⚠ {unansweredQuestions} unanswered questions</span>
          </p>
        </div>
      </div>

      <div>
      <h2 style={{position:'relative', left:'90px', top:'60px'}}>Top Post</h2>
      <div style={boxStyle}>
        <div className={"flex-container"}>
          <p>
          <h2 style={{position:'absolute',left:'20px',top:'10px', fontSize:'20px'}}>{first.title}</h2>
          <span style={{position: 'absolute', left:'20px', top:'25px', margin:'10px'}}>{first.body}</span>
          </p>
        
        </div>
      </div>
      <h2 style={{position:'relative', left:'90px'}}>Top User</h2>
      <div style={{...boxStyle, bottom:'60px'}}>
        <div className={"flex-container"}>
        <p>
          <h2 style={{position:'absolute',left:'20px',top:'10px', fontSize:'20px'}}>Anonymous</h2>
          <img className={'avatar'} src={'https://via.placeholder.com/50'} alt='avatar' style={{position:'relative', left:'340px', top:'8px'}}/>
          <div className={'dot green'} style={{position:'relative', left:'375px', bottom:'3px'}}></div>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Summary;