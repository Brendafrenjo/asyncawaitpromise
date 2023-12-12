import React from "react";

export default function Promises() {
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
    setTimeout(() => {
      let output = "";
      users.map((user, key) => {
        output += `<p key=${index}>Name: ${user}</p>`;
      });
    }, 1000);
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

  createUser({
    name: "Lucia Masu",
    age: 31,
    emial: "luciamasu@gmail.com",
  }).then(getUsers);

  return (
    <div>
      <h1></h1>
    </div>
  );
}
