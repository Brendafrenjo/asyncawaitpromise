import React from "react";

export default function CallBacks() {
  const posts = [
    {
      title: "Post One",
      body: "This is post one",
    },
    {
      title: "Post Two",
      body: "This is post two",
    },
  ];

  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.map((post, index) => {
        return (output += <li key={index}>{post.title}</li>);
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  const users = [
    {
      name: "Midlred",
      age: 32,
      sex: "female",
    },
    {
      name: "Richard",
      age: 26,
      sex: "Male",
    },
  ];

  function getNames() {
    setTimeout(() => {
      let output = "";
      users.map((user, index) => {
        return (output = +(<li key={index}>{user.name}</li>));
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  return (
    <div>
      <h1>{getPosts}</h1>
      <p>{getNames}</p>
    </div>
  );
}
