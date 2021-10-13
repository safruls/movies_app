import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import styled from "@emotion/styled";
import { fetchSearchedMovies } from "store/searchMovies/action";

const SearchBar = ({ page }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (page > currentPage) {
      dispatch(fetchSearchedMovies(searchParams, page));
      setCurrentPage(page);
    }
  }, [page]);

  const onSearch = (value) => {
    dispatch(fetchSearchedMovies(value, 1));
    setSearchParams(value);
    setCurrentPage(1);
  };

  return (
    <SearchSection>
      <Input.Search
        data-testid="input-search"
        placeholder="Search movies title..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </SearchSection>
  );
};

export default SearchBar;

const SearchSection = styled.div`
  width: 100%;
  flex-basis: 50%;
  flex: 1;
`;
