"use client";

import React from "react";

export default function RenderDate({ date }: { date: string }) {
  if (!date) return null;
  return <>{new Date(date).toLocaleDateString()}</>;
}
