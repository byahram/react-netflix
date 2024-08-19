import React from "react";
import styled from "styled-components";
import { IGetMoviesResult, IMovie } from "../api/interface";
import { getImagePath } from "../api/utils";

interface IBannerProps {
  section: string;
  contents?: IGetMoviesResult;
  movies: IMovie;
}

const Banner = ({ section, contents }: IBannerProps) => {
  console.log("section ::: ", section);
  console.log("content ::: ", contents);
  return (
    <>
      {contents && (
        <BannerContainer
          backdropBg={getImagePath(contents.backdrop_path)}
          posterBg={getImagePath(contents.poster_path)}
        >
          <RankingContainer>
            <RankingLogo src="./logo.png" alt="Netflix logo" />
            <RankingText>
              {section === "movie" ? "banner.movie" : "banner.tv"}
            </RankingText>
          </RankingContainer>

          <Title>{section === "movie" ? contents.title : contents.name}</Title>

          <DateAndRatingContainer>
            <Date>
              {section === "movie"
                ? "Released: " + contents.release_date || "None"
                : "First Aired: " + contents.first_air_date || "None"}
            </Date>
            <Rating>
              {contents.vote_average !== null
                ? "Rating: ⭐" + contents.vote_average
                : "Rating: ⭐" + "None"}
            </Rating>
          </DateAndRatingContainer>

          {/* <Overview>{contents.overview}</Overview> */}

          {/* <MoreBtn onClick={() => onMoreButtonClick(content.id)}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>{t("banner.button")}</span>
          </MoreBtn> */}
        </BannerContainer>
      )}
    </>
  );
};

export default Banner;

const Overview = styled.p`
  width: 40%;
  margin-bottom: 20px;
  font-size: 1.2vw;
  word-wrap: break-word;
  word-break: keep-all;
  ${({ theme }) => theme.textShadow};
  ${({ theme }) => theme.MaxLines(3)};

  @media (max-width: 1023px) {
    width: 60%;
    font-size: 16px;
  }

  @media (max-width: 479px) {
    display: none;
  }
`;

const Rating = styled.span`
  margin-left: 10px;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.green};
`;

const DateAndRatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 10px;
  font-size: 0.9vw;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  font-size: 2.6vw;
  font-weight: 700;
  margin-bottom: 20px;
  ${({ theme }) => theme.textShadow};

  @media (max-width: 1023px) {
    font-size: 32px;
  }

  @media (max-width: 479px) {
    text-align: center;
  }
`;

const RankingText = styled.h1`
  font-size: 1.6vw;
  font-weight: 700;
  ${({ theme }) => theme.textShadow};

  @media (max-width: 1023px) {
    font-size: 20px;
  }
`;

const RankingLogo = styled.img`
  width: 1.6vw;
  margin-right: 5px;

  @media (max-width: 1023px) {
    width: 20px;
  }
`;

const RankingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BannerContainer = styled.div<{ backdropBg: string; posterBg: string }>`
  width: 100%;
  height: 56.25vw;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.backdropBg});

  @media (max-width: 1023px) {
    height: 90vw;
    padding: 0 40px;
  }

  @media (max-width: 479px) {
    align-items: center;
    height: 150vw;
    padding: 0 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
      url(${(props) => props.posterBg});
  }
`;
