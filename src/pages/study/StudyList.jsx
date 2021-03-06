import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../api/index";
import { useEffect } from "react";

const StudyList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const getData = async () => {
    const res = await get("/study")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/")}>메인페이지</button>
      <div>
        <input
          placeholder="스터디를 검색해보세요."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        ></input>
        <button onClick={() => {}}>스터디 검색</button>
        <button onClick={() => navigate("/study_create")}>스터디 생성</button>
        <h4>스터디 목록</h4>
        {data?.map((element) => (
          <span
            key={element.id}
            onClick={() => navigate(`/study_detail/${element.id}`)}
          >
            <p>제목: {element.title}</p>
            <p>내용: {element.content}</p>
            <p>분야: {element.section}</p>
            <p>지역: {element.area}</p>
            <p># {element.hashtag}</p>
            <hr />
          </span>
        ))}
      </div>
    </>
  );
};

export default StudyList;
