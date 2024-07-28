"use client"
import React, { useState } from 'react';
import supabase from "../../Supabase/config";

const Page = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [subjects, setSubjects] = useState({
    english: '',
    math: '',
    science: '',
    social: '',
    health: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const {data, error} = await supabase
      .from("StudentGrade")
      .insert([
        {
          "Name": name,
          "Grade": parseInt(grade),
          EnglishGrade: parseInt(subjects.english),
          MathGrade: parseInt(subjects.math),
          ScienceGrade:parseInt(subjects.science),
          SocialGrade:parseInt(subjects.social),
          HealthGrade:parseInt(subjects.health)

        }
      ])
      if(error){
        console.log(error, "Couldn't inset the data!!!!")
      }else{
        setName("");
        setGrade("");
        setSubjects({
          english: '',
          math: '',
          science: '',
          social: '',
          health: ''
        })
        alert("Sucessfully added the student.")
      }
    }catch(err){
      console.log(err, "Couldn't inset the data!!!!");
    }
  };

  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Student Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter student name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="grade"
          >
            Grade
          </label>
          <input
            type="text"
            name="grade"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter student grade"
            required
          />
        </div>
        {["english", "math", "science", "social", "health"].map((subject) => (
          <div key={subject} className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor={subject}
            >
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </label>
            <input
              type="number"
              name={subject}
              id={subject}
              value={subjects[subject]}
              onChange={handleSubjectChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder={`Enter ${subject} grade`}
              min="0"
              max="100"
              required
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
