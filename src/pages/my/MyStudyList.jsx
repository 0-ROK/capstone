import React, { useEffect, useState } from "react";
import { useStudyActions } from "../../api/study";
import StudyCardView from "../study/StudyCardView";

const MyStudyList = () => {
  const studyActions = useStudyActions();

  const [myStudyList, setMyStudyList] = useState([]);

  // todo: 유저의 스터디 정보 불러오기
  const loadUserStudyList = async () => {
    const res = await studyActions.getStudyList();
    if (res.status === 200) setMyStudyList(res.data);
  };

  useEffect(() => {
    loadUserStudyList();
  }, []);

  return (
    <>
      <div className="cardList">
        {myStudyList.map((study) => (
          <StudyCardView key={study.id} study={study} />
        ))}
      </div>
    </>
  );
};

export default MyStudyList;
