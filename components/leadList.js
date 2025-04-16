"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/leads`
        );
        setLeads(response.data);
      } catch (err) {
        console.error("Error fetching leads", err);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className=" border border-red-500 rounded-2xl p-4 w-[700px]">
        <h2 className="text-2xl text-center">Lead List</h2>
        <ul>
          {leads.map((lead) => (
            <li key={lead.id}>
              <p>
                {lead.name} - {lead.email} - {lead.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadList;
