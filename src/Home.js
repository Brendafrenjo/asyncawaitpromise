import React from "react";
import Promises from "./Promises";
import LocalStorage from "./LocalStorage";
import LogInForm from "./LogInForm";
import LogIn from "./LogIn";

export default function Home() {
  return (
    <div>
      <LogIn />
      <LogInForm />
      <LocalStorage />
      <Promises />
    </div>
  );
}
