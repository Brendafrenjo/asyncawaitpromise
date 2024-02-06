import React from "react";
import Promises from "./Promises";
import LocalStorage from "./LocalStorage";
import LogInForm from "./LogInForm";
import LogIn from "./LogIn";
import FaqSection from "./FaqSection";

export default function Home() {
  return (
    <div>
      <FaqSection />
      <LogIn />
      <LogInForm />
      <LocalStorage />
      <Promises />
    </div>
  );
}
