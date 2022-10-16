import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-2" style={{ textAlign: "center" }}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/study_list")}
        >
          스터디 둘러보기
        </Button>
        <Button
          variant="success"
          size="lg"
          onClick={() => navigate("/study_create")}
        >
          스터디 생성하기
        </Button>
      </div>
    </>
  );
};

export default Home;
