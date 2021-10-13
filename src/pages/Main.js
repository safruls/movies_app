import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Divider } from "antd";
import SearchBar from "components/Search/SearchBar";
import SearchResult from "components/Search/SearchResult";
import Spinner from "components/Spinner";

const Main = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { movies, loading, lastQuery } = useSelector(
    (state) => state.searchMovies
  );

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      if (query !== lastQuery) {
        setPage(1);
        setQuery(lastQuery);
      } else {
        setPage((prev) => prev + 1);
      }
    }
  };

  return (
    <Container onScroll={handleScroll}>
      <SearchContainer>
        <Label>
          <h2>Search your favorite movies:</h2>
        </Label>
        <SearchBar page={page} />
      </SearchContainer>
      <Divider />
      {movies && (
        <ResultContainer>
          {movies?.map((movie) => {
            return <SearchResult movie={movie} key={movie.imdbID} />;
          })}
        </ResultContainer>
      )}
      {loading && <Spinner />}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  height: 100%;
  min-width: 290px;
  width: 100%;
  padding: 10px;
  overflow-y: auto;

  @media (min-width: 992px) {
    padding: 24px;
  }
`;

const SearchContainer = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const Label = styled.div`
  margin-right: 20px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
