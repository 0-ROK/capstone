import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  InputGroup,
  SplitButton,
} from "react-bootstrap";
import { useStudyActions } from "../../api/study";
import StudyCardView from "./StudyCardView";

const StudyList = () => {
  const studyActions = useStudyActions();

  const [studyList, setStudyList] = useState([]);

  // search
  const [searchOption, setSearchOption] = useState("검색 옵션");
  const [option, setOption] = useState("");
  const [search, setSearch] = useState("");
  let [result, setResult] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    if (search !== "") {
      if (option !== "") {
        result = studyList.filter((study) => {
          switch (option) {
            case "title":
              if (study.title.toUpperCase().includes(search.toUpperCase())) {
                return study;
              }
              break;
            case "section":
              if (study.section.toUpperCase().includes(search.toUpperCase())) {
                return study;
              }
              break;
            case "area":
              if (study.area.toUpperCase().includes(search.toUpperCase())) {
                return study;
              }
              break;
            case "hashtag":
              if (study.hashtag.toUpperCase().includes(search.toUpperCase())) {
                return study;
              }
              break;
            default:
              break;
          }
        });
        setResult(result);
        setIsSearched(true);
      }
    } else;
  };

  const loadStudyList = async () => {
    const res = await studyActions.getStudyList();
    if (res.status === 200) setStudyList(res.data);
  };

  useEffect(() => {
    loadStudyList();
  }, []);

  return (
    <>
      <div className="searchContainer">
        <InputGroup className="mb-3">
          <SplitButton
            variant="outline-secondary"
            title={searchOption}
            id="segmented-button-dropdown-1"
          >
            <Dropdown.Item
              onClick={() => {
                setOption("title");
                setSearchOption("제목");
              }}
            >
              제목
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setOption("section");
                setSearchOption("분야");
              }}
            >
              분야
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setOption("area");
                setSearchOption("지역");
              }}
            >
              지역
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setOption("hashtag");
                setSearchOption("#해시태그");
              }}
            >
              #해시태그
            </Dropdown.Item>
          </SplitButton>
          <Form.Control
            type="search"
            placeholder="스터디를 검색해주세요."
            className="me-0"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            검색
          </Button>
        </InputGroup>
      </div>
      <div className="cardList">
        {!isSearched
          ? studyList.map((study) => (
              <StudyCardView key={study.id} study={study} />
            ))
          : result.map((study) => (
              <StudyCardView key={study.id} study={study} />
            ))}
      </div>
    </>
  );
};

export default StudyList;
