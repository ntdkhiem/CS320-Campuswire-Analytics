import React, { useState } from "react";
import NavTabs from "./navtabs";
import LineChart from "./linechart";

const resCommentTrend = await fetch('http://localhost:3001/numCommentsTrends')
const resComment = await resCommentTrend.json();

const resUserDataTrend = await fetch('http://localhost:3001/numUniqueUsersTrends')
const resUserData = await resUserDataTrend.json();

const resPostTrend = await fetch('http://localhost:3001/numPostsTrends')
const resPost = await resPostTrend.json();

const resUnansweredQuestionsTrend = await fetch('http://localhost:3001/numUnansweredQuestionsTrends')
const resUnansweredQuestions = await resUnansweredQuestionsTrend.json();

const Statistics = (props) => {
  const [activeTab, setActiveTab] = useState(0); // Initialize the active item  

  const handleNavTabClick = (item) => {
    setActiveTab(item);
  };

  const users_data = resUserData
  const posts_data = resPost
  const comments_data = resComment
  const unansweredQuestions_data = resUnansweredQuestions

  return (
    <div>
      <NavTabs activeTab={activeTab} handleNavTabClick={handleNavTabClick} />
      {activeTab === 0 && (
        <LineChart
          label="Unique users per day"
          date={users_data.map((endpoint) => endpoint.date)}
          count={users_data.map((endpoint) => endpoint.count)}
        />
      )}
      {activeTab === 1 && (
        <LineChart
          label="Posts per day"
          date={posts_data.map((endpoint) => endpoint.date)}
          count={posts_data.map((endpoint) => endpoint.count)}
        />
      )}
      {activeTab === 2 && (
        <LineChart
          label="Comments per day"
          date={comments_data.map((endpoint) => endpoint.date)}
          count={comments_data.map((endpoint) => endpoint.count)}
        />
      )}
      {activeTab === 3 && (
        <LineChart
          label="Unanswered Questions per day"
          date={unansweredQuestions_data.map((endpoint) => endpoint.date)}
          count={unansweredQuestions_data.map((endpoint) => endpoint.count)}
        />
      )}
    </div>
  );
};

export default Statistics;
