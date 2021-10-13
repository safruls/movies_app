import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import styled from "@emotion/styled";
import { fetchMovieDetails } from "store/searchMovies/action";
import Spinner from "components/Spinner";

const MovieDetails = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { movie, loading } = useSelector((state) => state.searchMovies);

  const { Title, Released, Poster, Plot, Actors, Director, Writer, Genre } =
    movie;

  useEffect(() => {
    dispatch(fetchMovieDetails(title));
  }, [title, dispatch]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<StyledImageMobile alt={Title} src={Poster} />}
          title={<StyledH>{Title}</StyledH>}
        >
          <Content>
            <StyledImage alt={Title} src={Poster} />
            <Card.Meta
              description={
                <Wrapper>
                  <div>
                    <StyledP>{Plot}</StyledP>
                  </div>
                  <StlyedUndorderedList>
                    <StyledItem>
                      Released Date: <strong>{Released}</strong>
                    </StyledItem>
                    <StyledItem>
                      Genre: <strong>{Genre}</strong>
                    </StyledItem>
                    <StyledItem>
                      Director: <strong>{Director}</strong>
                    </StyledItem>
                    <StyledItem>
                      Writer(s): <strong>{Writer}</strong>
                    </StyledItem>
                    <StyledItem>
                      Star(s): <strong>{Actors}</strong>
                    </StyledItem>
                  </StlyedUndorderedList>
                </Wrapper>
              }
            />
          </Content>
        </Card>
      )}
    </Container>
  );
};

export default MovieDetails;

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  // height: 100%;
  min-width: 290px;
  width: 100%;
  padding: 10px;
  overflow-y: auto;

  @media (min-width: 992px) {
    padding: 24px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  word-wrap: break-word;
`;

const StyledImage = styled.img`
  display: none;
  @media (min-width: 992px) {
    height: 100%;
    display: block;
  }
`;

const StyledImageMobile = styled.img`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

const StlyedUndorderedList = styled.ul`
  display: inline-block;
  margin-block-start: 1px;
  margin-block-end: 1px;
  padding-inline-start: 18px;
`;

const StyledItem = styled.li`
  color: black;
`;

const StyledP = styled.p`
  color: black;
`;

const StyledH = styled.h1`
  color: black;
`;

const Content = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`;
