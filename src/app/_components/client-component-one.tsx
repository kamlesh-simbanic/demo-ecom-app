"use client";

import React, { useState } from "react";
import ClientComponentTwo from "./client-component-two";
import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client Component Two</h1>
      {children}
    </>
  );
}
