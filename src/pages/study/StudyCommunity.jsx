import React, { useState } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Card, Form, Modal } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router";
import CardHeader from "react-bootstrap/esm/CardHeader";

const StudyCommunity = () => {
  const navigate = useNavigate();

  const loadedData = useState([]);

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

      {loadedData?.map((ele) => (
        <Card style={{ width: "18rem", margin: "10px 10px" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ffYg4ePSTDEEc_dNcQfaZvnEg6pFS2WCEQ&usqp=CAU"
          />
          <CardHeader title={ele?.title} description={ele?.description} />
          <div dangerouslySetInnerHTML={{ __html: loadedData?.content }} />
        </Card>
      ))}
    </div>
  );
};

export default StudyCommunity;
