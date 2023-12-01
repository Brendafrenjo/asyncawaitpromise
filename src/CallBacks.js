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
        output += <li key={index}>{post.title}</li>;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  return <div>{getPosts}</div>;
}
