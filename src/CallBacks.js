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

  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);

        let error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
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

  function getUsers() {
    setTimeout(() => {
      let output = "";
      users.map((user, index) => {
        return (output = +(<li key={index}>{user.name}</li>));
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  function createUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users.push(user);

        let error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error! Something went wrong!");
        }
      }, 2000);
    });
  }

  createPost({ title: "Post Three", body: "This os post three" }).then(
    getPosts
  );
  createUser({ name: "Brenda", age: 31, sex: "female" }).then(getUsers);

  return (
    <div>
      <p></p>
      <p></p>
    </div>
  );
}
