"use client";

import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useEvent from "../utils/use-event";

const initialState = {
  content: "",
  onConfirm: () => ({}),
};

const DeleteModal: React.FC = () => {
  const { listen } = useEvent();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<{
    content: string | JSX.Element;
    onConfirm: () => void;
  }>(initialState);

  const hide = () => {
    setData(initialState);
    setShowModal(false);
  };

  useEffect(() => {
    listen(
      "DELETE_MODAL_SHOW",
      ({
        content,
        onConfirm,
      }: {
        content: string | JSX.Element;
        onConfirm: () => void;
      }) => {
        setData({ content, onConfirm });
        setShowModal(true);
      }
    );
  }, []);

  return (
    <Modal show={showModal} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className="text-danger">Are you sure you want to delete </span>
          <span className="fw-bolder">{data.content}</span>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            data.onConfirm();
            hide();
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
