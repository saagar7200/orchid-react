import React from "react";
import NavBar from "../components/nav/nav";

const Dashboard = () => {
  return (
    <div className="h-full min-w-full">
      {/* navbar */}
      <div className="w-full">
        <NavBar/>
      </div>

      {/* list notes */}
      <div>Notes</div>

      {/*  */}
    </div>
  );
};

export default Dashboard;
