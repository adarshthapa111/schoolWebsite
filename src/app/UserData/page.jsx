"use client";

import { useEffect, useState } from "react";
import supabase from "../Supabase/config";
import Swal from "sweetalert2";
import Searchbar from "../components/Searchbar";

export default function Component() {
  const [fetchError, setFetchError] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Fetching data from Supabase...");
      try {
        const { data, error } = await supabase.from("Students").select();
        if (error) {
          setFetchError("Cannot Fetch data!");
          setUsersData(null);
          console.error("Error fetching data:", error);
        }

        if (data) {
          setUsersData(data);
          setFetchError(null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setFetchError("Unexpected error occurred!");
      }
    };

    fetchUserData();
  }, []);

  // Handling Search
  const handleSearch = (data) => {
    setStudents(data);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete it",
      text: "You cannot undo it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Yes Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { error } = await supabase
            .from("Students")
            .delete()
            .eq("id", id);
          if (error) {
            console.log("Error while deleting");
          } else {
            setUsersData(usersData.filter((user) => user.id !== id));
            Swal.fire({
              title: "Sucessfully Deleted",
              text: "User has been deleted sucessfully",
              icon: "success",
              confirmButtonColor: "black",
            });
          }
        } catch (err) {
          console.log("Error Occured", err);
        }
      }
    });
  };

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6">
        {fetchError && <p>{fetchError}</p>}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Brilliant United Academy</h1>
          {/* <p className="text-lg">Week of May 28, 2024</p> */}
          <Searchbar onSearch={handleSearch} />
        </div>
      </header>

      <main className="p-6">
        <div className="container flex absolute bg-gray-200 rounded-xl max-w-2xl p-4">
          {students.length > 0 ? (
            <ul>
              {students.map((student) => (
                <li key={student.id} className="p-2 border-b border-gray-400 ">
                  {`${student.FirstName} ${student.LastName} - ${student.Email}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>No student Found</p>
          )}
        </div>
        {usersData && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="px-4 py-2 font-medium text-left">User ID</th>
                  <th className="px-4 py-2 font-medium text-center">
                    First Name
                  </th>
                  <th className="px-4 py-2 font-medium text-center">
                    Last Name
                  </th>
                  <th className="px-4 py-2 font-medium text-center">Email</th>
                  <th className="px-4 py-2 font-medium text-center">Grade</th>
                  <th className="px-4 py-2 font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-4 py-3 font-medium">{user.id}</td>
                    {console.log(user.id)}
                    <td className="px-4 py-3 text-center">{user.FirstName}</td>
                    <td className="px-4 py-3 text-center">{user.LastName}</td>
                    <td className="px-4 py-3 text-center">{user.Email}</td>
                    <td className="px-4 py-3 text-center">{user.Grade}</td>
                    {/* <button className="bg-red-500 p-2">Delete</button> */}
                    <td className="px-4 py-3 text-center">
                      <button
                        className="bg-red-500 p-2 rounded-md text-white"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
