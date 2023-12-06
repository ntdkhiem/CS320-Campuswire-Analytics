import React, { useState } from "react";
import NavTabs from "./navtabs";
import LineChart from "./linechart";

const resCommentTrend = await fetch('http://localhost:3001/numCommentsTrends')
const resComment = await resCommentTrend.json();

// const resUserDataTrend = await fetch('http://localhost:3001/numUniqueUsersTrends')
// const resUserData = await resUserDataTrend.json();

// const resPostTrend = await fetch('http://localhost:3001/numPostsTrends')
// const resPost = await resPostTrend.json();

const Statistics = (props) => {
  const [activeTab, setActiveTab] = useState(0); // Initialize the active item  

  const handleNavTabClick = (item) => {
    setActiveTab(item);
  };

  const users_data = resComment
  const posts_data = [
    { date: "2023-11-23", count: 52 },
    { date: "2023-11-24", count: 42 },
    { date: "2023-11-25", count: 69 },
    { date: "2023-11-26", count: 91 },
    { date: "2023-11-27", count: 57 },
    { date: "2023-11-28", count: 32 },
    { date: "2023-11-29", count: 65 },
    { date: "2023-11-30", count: 13 },
    { date: "2023-12-01", count: 54 },
    { date: "2023-12-02", count: 85 },
    { date: "2023-12-03", count: 32 },
    { date: "2023-12-04", count: 74 },
    { date: "2023-12-05", count: 93 },
    { date: "2023-12-06", count: 13 },
    { date: "2023-12-07", count: 44 },
    { date: "2023-12-08", count: 76 },
  ];

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
    </div>
  );
};

export default Statistics;
