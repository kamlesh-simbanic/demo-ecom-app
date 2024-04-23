"use client";

import React from "react";
import { useTheme } from "@/app/_components/ThemProvider";
import { clientSideFunction } from "@/app/utils/client-utils";

export default function ClientRoutePage() {
  console.log("client route rendrred");

  const theme = useTheme();

  const result = clientSideFunction();

  return (
    <h1 style={{ color: theme.colors.secondary }}>Client Route {result}</h1>
  );
}
