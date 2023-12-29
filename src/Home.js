import React from "react";
import Promises from "./Promises";
import LocalStorage from "./LocalStorage"

export default function Home() {
  return (
    <div>
      <LocalStorage />
      <Promises />
    </div>
  );
}
