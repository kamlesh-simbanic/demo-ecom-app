"use client";

import { serverSideSection } from "@/app/utils/server-utils";

export default function ClientRoutePage() {
  console.log("client route rendrred");

  const result = serverSideSection();

  return (
    <>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
