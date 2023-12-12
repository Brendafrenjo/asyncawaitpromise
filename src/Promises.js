import React, { useState, useEffect } from "react";
import AsynAwait from "./AsynAwait";

export default function Promises() {
  const [users, setUsers] = useState([
    {
      name: "Bella Rose",
      age: 23,
      email: "bellarose@gmail.com",
    },
    {
      name: "Lucca Ress",
      age: 33,
      email: "luccaress@gmail.com",
    },
  ]);

  function getUsers() {
    let output = users
      .map((user, index) => {
        return `<p key=${index}>Name: ${user.name} <br /> Age: ${user.age} <br /> Email: ${user.email}</p>`;
      })
      .join("");
    let body = document.querySelector("#main");
    body.innerHTML = output;
  }

  function createUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsers((prevUsers) => [...prevUsers, user]);

        const error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  createUser({
    name: "Lucia Masu",
    age: 31,
    email: "luciamasu@gmail.com",
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div id="main"></div>
      <AsynAwait />
    </div>
  );
}
