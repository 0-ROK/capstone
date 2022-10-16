// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthActions } from "../../api/auth";
// import { Button, Checkbox, Form, Input, Space } from "antd";
// import jwt_decode from "jwt-decode";
// import Navbar from "../../common/Navbar";

// const Login = () => {
//   const navigate = useNavigate();
//   const authActions = useAuthActions();

//   const onFinish = (values) => {
//     console.log("Success:", values);
//     authActions.login(values).then((res) => {
//       navigate("/");

//       // jwt 토큰 접근해서 닉네임 저장하기
//       let token = localStorage.getItem("studyCapstone");
//       let decoded = jwt_decode(token);
//       localStorage.setItem("nickName", decoded.nickname);
//     });
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
//               name="remember"
//               valuePropName="checked"
//               wrapperCol={{
//                 offset: 8,
//                 span: 16,
//               }}
//             >
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//             <Form.Item
//               wrapperCol={{
//                 offset: 8,
//                 span: 16,
//               }}
//             >
//               <Space direction="horizontal">
//                 <Button type="primary" htmlType="submit">
//                   로그인
//                 </Button>
//                 <Button
//                   htmlType="button"
//                   onClick={() => {
//                     navigate("/regist");
//                   }}
//                 >
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

// export default Login;

import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../api/auth";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const loginedUser = localStorage.getItem("userID");

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    const userData = {
      username: id,
      password: password,
    };

    authActions.login(userData).then((res) => {
      setShow(true);
      console.log(res);

      // jwt 토큰 접근해서 닉네임 저장하기
      let token = localStorage.getItem("studyCapstone");
      let decoded = jwt_decode(token);
      localStorage.setItem("nickname", decoded.nickname);
    });
  };

  return (
    <>
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
        <Button variant="primary" onClick={handleSubmit}>
          로그인
        </Button>
        <Button variant="warning" onClick={() => navigate("/regist")}>
          회원가입
        </Button>
      </Form>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그인 성공</Modal.Title>
        </Modal.Header>
        <Modal.Body>{loginedUser}님, 안녕하세요.</Modal.Body>
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
    </>
  );
};

export default Login;
