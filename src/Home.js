import React from "react";
import Promises from "./Promises";
import LocalStorage from "./LocalStorage";
import LocStorage from "./LocStorage";

export default function Home() {
  return (
    <div>
      <LocStorage />
      <LocalStorage />
      <Promises />
    </div>
  );
}
