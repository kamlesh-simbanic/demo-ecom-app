"use client";

import { useUserService } from "@/app/_services";
import Button from "../button";
import React, { useState } from "react";

export const LogoutButton = () => {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  async function logout() {
    setLoggingOut(true);
    await userService.logout();
    setLoggingOut(false);
  }

  return (
    <Button
      variant="outline-danger"
      label={
        loggingOut ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : (
          <span>Logout</span>
        )
      }
      onClick={logout}
      disabled={loggingOut}
    />
  );
};
