import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const MyProfile = () => {
  const [profile, setProfile] = useState([]);

  const [show, setShow] = useState(false);

  // const loadUserProfile = async () => {
  //   // 유저 데이터 불러오는 코드
  //   setProfile();
  // };

  // useEffect(() => {
  //   loadUserProfile();
  // }, []);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>닉네임</Card.Title>
          <Card.Text>나는 누구이고 어디 살며 어떻게 살아간다.</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>관심분야: </ListGroup.Item>
          <ListGroup.Item>지역: </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link onClick={() => setShow(true)}>프로필 수정하기</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyProfile;
