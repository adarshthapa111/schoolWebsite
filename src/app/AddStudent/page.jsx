"use client";

import { useState } from "react";
import supabase from "../Supabase/config";

const page = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Students")
        .insert([
          {
            "First Name": firstName,
            "Last Name": lastName,
            Email: email,
            Grade: parseInt(grade),
          },
        ]);
        if(error){
            console.log(error);
        }else{
            setFirstName('');
            setLastName('');
            setEmail('');
            setGrade('');
            alert("Sucessfully added the student.")
        }
    } catch (err) {
      console.log("Error storing data", err);
    }
  };

  return (
    <div className="container mx-auto mt-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center text-blue-600">
        Add Student
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md px-4 py-2 border border-gray-300"
            placeholder="Enter first name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
            placeholder="Enter last name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
            placeholder="Enter email address"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="grade"
            className="block text-sm font-medium text-gray-700"
          >
            Grade
          </label>
          <input
            type="number"
            id="grade"
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
            placeholder="Enter grade"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default page;
