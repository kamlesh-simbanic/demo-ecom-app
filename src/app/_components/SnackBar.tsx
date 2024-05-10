"use client";

import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import useEvent from "../utils/use-event";

const Snackbar: React.FC = ({}) => {
  const { listen } = useEvent();

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string | JSX.Element>("");

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    listen("SHOW_SNACK_BAR", (content: string | JSX.Element) => {
      setMessage(content);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 3000);
    });
  }, []);

  return (
    <div
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
    >
      <Alert
        show={visible}
        variant="success"
        onClose={handleClose}
        dismissible
        transition
      >
        {message}
      </Alert>
    </div>
  );
};

export default Snackbar;
