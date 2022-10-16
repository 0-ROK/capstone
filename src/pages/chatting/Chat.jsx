import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import VideoChatRoom from "./VideoChatRoom";

const Chat = () => {
  const navigate = useNavigate();

  const [showChat, setShowChat] = useState(false);
  const [showVideoChat, setShowVideoChat] = useState(false);

  return (
    <div>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary" onClick={() => setShowChat(true)}>
            채팅하기
          </Button>
          <Button variant="primary" onClick={() => setShowVideoChat(true)}>
            화상회의
          </Button>
        </Card.Body>
      </Card>
      {showChat ? <ChatRoom /> : null}
      {showVideoChat ? <VideoChatRoom /> : null}
    </div>
  );
};

export default Chat;
