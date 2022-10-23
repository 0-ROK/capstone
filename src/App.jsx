import React, { useState } from "react";
import { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";

import StudyCreate from "./pages/study/StudyCreate";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";
import StudyEdit from "./pages/study/StudyEdit";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";
import { Navigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from "./common/Navigator";

import Chat from "./pages/chatting/Chat";
import MyPage from "./pages/my/MyPage";
import StudyCommunity from "./pages/study/StudyCommunity";

const App = () => {
  return (
    <>
      <Navigator />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          {/* <Route
            path="/regist"
            element={
              !localStorage.getItem("studyCapstone") ? (
                <Regist />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> */}
          <Route path="/study_create" element={<StudyCreate />} />
          <Route path="/study_detail/:id" element={<StudyDetail />} />
          <Route path="/study_edit/:id" element={<StudyEdit />} />
          <Route path="/study_community" element={<StudyCommunity />} />
          <Route path="/study_list" element={<StudyList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
