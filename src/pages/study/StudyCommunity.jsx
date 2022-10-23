import React from "react";

import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Form, Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router";

const StudyCommunity = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>제목</Form.Label>
          <Form.Control
            // onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="제목을 입력해주세요."
          />
        </Form.Group>
        <Editor />
      </Form>
    </div>
  );
};

export default StudyCommunity;
