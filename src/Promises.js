import React, { useEffect } from "react";
import AsynAwait from "./AsynAwait";

export default function Promises() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = numbers.filter(isEven);

  function isEven(value) {
    return value % 2 === 0;
  }

  console.log(evens);

  const words = [
    "exuberant",
    "exit",
    "happy",
    "interesting",
    "extravagant",
    "mode",
  ];

  const results = words.filter((word) => word.length > 6);

  console.log(results);

  const people = [
    {
      name: "Brenda",
      age: 13,
    },
    {
      name: "Lucy",
      age: 21,
    },
    {
      name: "Grace",
      age: 18,
    },
  ];

  const adult = people.filter((person) => person.age >= 18);

  console.log(adult);

  let users = [
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
  ];

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
        users.push(user);

        const error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  useEffect(() => {
    createUser({
      name: "Lucia Masu",
      age: 31,
      email: "luciamasu@gmail.com",
    }).then(getUsers);
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div id="main"></div>
      <AsynAwait />
    </div>
  );
}
