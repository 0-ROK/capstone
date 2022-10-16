// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthActions } from "../../api/auth";
// import { Button, Checkbox, Form, Input, Space } from "antd";
// import Navbar from "../../common/Navbar";

// const Regist = () => {
//   const navigate = useNavigate();
//   const authActions = useAuthActions();

//   const onFinish = async (values) => {
//     const res = await authActions.register(values);
//     navigate(`/`);
//     console.log("Success: ", values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <>
//       <Navbar>
//         <Form
//           name="basic"
//           labelCol={{
//             span: 8,
//           }}
//           wrapperCol={{
//             span: 16,
//           }}
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Space direction="vertical">
//             <Form.Item
//               label="아이디"
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your username!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="비밀번호"
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <Form.Item
//               label="비밀번호 확인"
//               name="password-check"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>
//             <Form.Item
//               label="닉네임"
//               name="nickname"
//               rules={[
//                 {
//                   required: true,
//                   message: "닉네임",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="소개"
//               name="introduce"
//               rules={[
//                 {
//                   required: true,
//                   message: "자기 소개",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="지역"
//               name="area"
//               rules={[
//                 {
//                   required: true,
//                   message: "지역",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="카테고리"
//               name="category"
//               rules={[
//                 {
//                   required: true,
//                   message: "카테고리",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               wrapperCol={{
//                 offset: 8,
//                 span: 16,
//               }}
//             >
//               <Space direction="horizontal">
//                 <Button type="primary" htmlType="submit">
//                   회원가입
//                 </Button>
//               </Space>
//             </Form.Item>
//           </Space>
//         </Form>
//       </Navbar>
//     </>
//   );
// };

// export default Regist;

import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../api/auth";

const Regist = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  const [area, setArea] = useState("");
  const [interests, setInterests] = useState("");
  const [introduce, setIntroduce] = useState("");

  const [show, setShow] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async () => {
    const userData = {
      username: id,
      password: password,
      nickname: nickName,
      area: area,
      category: interests,
      introduce: introduce,
    };

    // TODO: 회원가입이 안 되는 경우의 조건문 작성(ex. 아이디 중복)
    const res = await authActions.register(userData);
    setShow(true);
    console.log("Success: ", JSON.parse(res.config.data));
  };

  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNickName">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              onChange={(e) => setNickName(e.target.value)}
              type="text"
              placeholder="닉네임을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicArea">
            <Form.Label>지역</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="text"
              placeholder="사는 지역을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInterests">
            <Form.Label>관심 분야</Form.Label>
            <Form.Control
              onChange={(e) => setInterests(e.target.value)}
              type="text"
              placeholder="관심 분야를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicIntroduce">
            <Form.Label>자기 소개</Form.Label>
            <Form.Control
              onChange={(e) => setIntroduce(e.target.value)}
              as="textarea"
              rows={2}
              placeholder="자기 소개를 입력해주세요."
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            회원가입
          </Button>
          <Button variant="secondary">가입취소</Button>
        </Form>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>회원가입 성공</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            회원가입에 성공했습니다. (확인을 누르면 메인으로 이동합니다.)
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                setShow(false);
                navigate("/");
              }}
            >
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Regist;
