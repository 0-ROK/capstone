import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  InputGroup,
  SplitButton,
} from "react-bootstrap";

// todo. 검색기능 완성하기
const Search = () => {
  const [option, setOption] = useState("검색 옵션");
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  return (
    <>
      <div className="searchContainer">
        <InputGroup className="mb-3">
          <SplitButton
            variant="outline-secondary"
            title={option}
            id="segmented-button-dropdown-1"
          >
            <Dropdown.Item onClick={() => setOption("제목")}>
              제목
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("지역")}>
              지역
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("해시태그")}>
              해시태그
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("카테고리")}>
              카테고리
            </Dropdown.Item>
          </SplitButton>
          <Form.Control
            type="search"
            placeholder="스터디를 검색해주세요."
            className="me-0"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="primary" onClick={() => {}}>
            검색
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default Search;
