"use client";
import { useState } from "react";
import LeadForm from "../components/leadForm";
import LeadList from "../components/leadList";

const Home = () => {
  const [leadForm, setIsLeadForm] = useState("form");
  console.log("🚀 ~ Home ~ leadForm:", leadForm);
  const handleFormLead = () => {
    setIsLeadForm("form");
  };
  const handleLeadList = () => {
    setIsLeadForm("list");
  };
  return (
    <div className="bg-white text-black h-dvh flex flex-col gap-2">
      <h1 className="text-5xl text-center pt-7">Lead Manager</h1>
      <div className="flex justify-center gap-3">
        <button
          className="border cursor-pointer border-black p-2 rounded-md"
          onClick={handleFormLead}
        >
          Lead Form
        </button>
        <button
          className="border cursor-pointer border-black p-2 rounded-md"
          onClick={handleLeadList}
        >
          Lead List
        </button>
      </div>
      {leadForm === "form" ? <LeadForm /> : <LeadList />}
    </div>
  );
};

export default Home;
