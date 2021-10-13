import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "@emotion/styled";
import ModalComponent from "components/Modal";

const SearchResult = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);
  const { Meta } = Card;

  return (
    <>
      <CardContainer key={movie?.Title}>
        <Card
          data-testid="result-display"
          hoverable
          style={{ width: 240 }}
          cover={
            <StyledImage
              alt={movie?.Title}
              src={movie?.Poster}
              onClick={() => {
                setOpenModal(true);
              }}
            />
          }
        >
          <Meta
            title={
              <>
                <Link to={`/${movie?.Title}`}>
                  <StyledParagraph>{movie?.Title}</StyledParagraph>
                </Link>
              </>
            }
            description={
              <Description>
                <StlyedUndorderedList>
                  <StyledItem>
                    Released Year: <strong>{movie?.Year}</strong>
                  </StyledItem>
                  <StyledItem>
                    IMDB ID: <strong>{movie?.imdbID}</strong>
                  </StyledItem>
                  <StyledItem>
                    Type: <strong>{movie?.Type}</strong>
                  </StyledItem>
                </StlyedUndorderedList>
              </Description>
            }
          />
        </Card>
      </CardContainer>
      {
        <ModalComponent
          movie={movie}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      }
    </>
  );
};

export default SearchResult;

const CardContainer = styled.div`
  margin: 10px 10px;

  & .ant-card-meta-title {
    overflow: visible;
    white-space: normal;
    word-break: break-all;
  }
`;

const StyledImage = styled.img`
  height: 320px;
`;

const Description = styled.div``;

const StlyedUndorderedList = styled.ul`
  display: inline-block;
  margin-block-start: 1px;
  margin-block-end: 1px;
  padding-inline-start: 18px;
`;

const StyledItem = styled.li`
  color: black;
`;

const StyledParagraph = styled.p`
  word-break: break-all;
`;
