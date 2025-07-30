import React from "react";
import NavBar from "../components/nav/nav";
import AddNote from "../components/add-note-button";
import NoteCard from "../components/notes/card";
import NoteForm from "../components/forms/note-form";

const Dashboard = () => {
  return (
    <div className="h-full min-w-full relative ">
      {/* navbar */}
      <div className="w-full">
        <NavBar/>
      </div>

      {/* list notes */}
      <div>
        <NoteCard/>
        <NoteForm/>
      </div>




      {/* add note button */}
      <div className="absolute bottom-6 right-0">
        <AddNote/>
      </div>
    </div>
  );
};

export default Dashboard;
