import React, { useEffect } from "react";

export default function AsynAwait() {
  const posts = [
    {
      post: "Post One",
      content: "This is post one",
      writer: "Naliaka Nasimiyu",
    },
    {
      post: "Post Two",
      content: "This is post two",
      writer: "Nyala Rod",
    },
  ];

  function getPosts() {
    let output = posts
      .map((post, index) => {
        return `<p key=${index}>Post: ${post.post} <br /> Content: ${post.content} <br /> Writer: ${post.writer}</p>`;
      })
      .join("");
    let body = document.querySelector("#content");
    body.innerHTML = output;
  }

  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);

        const error = false;

        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  async function fetchPosts() {
    await createPost({
      post: "Post Three",
      content: "This is post three",
      writer: "Mika Asindi",
    }).then(getPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Async Await</h1>
      <p id="content"></p>
    </div>
  );
}
