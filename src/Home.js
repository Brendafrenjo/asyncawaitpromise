import React from "react";
import Promises from "./Promises";
import LocalStorage from "./LocalStorage";
import LogInForm from "./LogInForm";

export default function Home() {
  return (
    <div>
      <LogInForm />
      <LocalStorage />
      <Promises />
    </div>
  );
}
