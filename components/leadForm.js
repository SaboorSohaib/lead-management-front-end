"use client";
import { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("New");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
        name,
        email,
        status,
      });
      setName("");
      setEmail("");
      setStatus("New");
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="border border-red-400 rounded-2xl w-[700px] p-4 flex flex-col gap-2">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-black rounded-md p-1 ml-2"
            placeholder="name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-black rounded-md p-1 ml-2"
            placeholder="email"
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-black rounded-md p-1 ml-2"
          >
            <option value="New">New</option>
            <option value="Engaged">Engaged</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed-Won">Closed-Won</option>
            <option value="Closed-Lost">Closed-Lost</option>
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          className="border border-black rounded-xl ml-2 p-2 cursor-pointer bg-amber-500"
        >
          Add Lead
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
