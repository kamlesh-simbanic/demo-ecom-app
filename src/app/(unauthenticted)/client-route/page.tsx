"use client";

import React from "react";
import { useTheme } from "@/app/_components/ThemProvider";

export default function ClientRoutePage() {
  console.log("client route rendrred");

  const theme = useTheme();
  const settings = {
    dots: true,
  };

  return <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>;
}
