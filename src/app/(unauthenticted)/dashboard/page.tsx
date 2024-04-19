"use client";
import { useState } from "react";

export default function AboutPage() {
  console.log("dashbaord client component");
  const [name, setName] = useState("");
  return (
    <>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>Hello, {name}!</p>
    </>
  );
}
