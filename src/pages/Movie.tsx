import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovieLists } from "../api/api";
import { IGetMoviesResult } from "../api/interface";
import { makeImagePath } from "../api/utils";
import { useState } from "react";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

// const RowVariants = {
//   hidden: {
//     x: window.outerWidth + 5,
//   },
//   visible: {
//     x: 0,
//   },
//   exit: {
//     x: -window.outerWidth - 5,
//   },
// };

// const BoxVariants = {
//   normal: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.3,
//     y: -80,
//     transition: {
//       delay: 0.5,
//       duaration: 0.1,
//       type: "tween",
//     },
//   },
// };

// const InfoVariants = {
//   hover: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       duaration: 0.1,
//       type: "tween",
//     },
//   },
// };

// const offset = 6;

function Home() {
  // const navigate = useNavigate();
  // const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");

  // now_playing
  const { data: nowPlayingList, isLoading: loadingNowPlaying } =
    useQuery<IGetMoviesResult>(["movies", "nowPlaying"], () =>
      getMovieLists("now_playing")
    );
  console.log("nowPlayingList::: ", nowPlayingList);

  // popular
  const { data: popularList, isLoading: loadingPopular } =
    useQuery<IGetMoviesResult>(["movies", "popular"], () =>
      getMovieLists("popular")
    );
  console.log("popularList::: ", popularList);

  // top_rated
  const { data: topRatedList, isLoading: loadingTopRated } =
    useQuery<IGetMoviesResult>(["movies", "topRated"], () =>
      getMovieLists("top_rated")
    );
  console.log("topRatedList::: ", topRatedList);

  // upcoming
  const { data: upcomingList, isLoading: loadingUpcoming } =
    useQuery<IGetMoviesResult>(["movies", "upcoming"], () =>
      getMovieLists("upcoming")
    );
  console.log("upcomingList::: ", upcomingList);

  const isLoading =
    loadingNowPlaying || loadingPopular || loadingTopRated || loadingUpcoming;

  // const [index, setIndex] = useState(0);
  // const [leaving, setLeaving] = useState(false);

  // const increaseIndex = () => {
  //   if (data) {
  //     if (leaving) return;
  //     toggleLeaving();
  //     const totalMovies = data.results.length - 1;
  //     const maxIndex = Math.floor(totalMovies / offset) - 1;
  //     setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  //   }
  // };
  // const toggleLeaving = () => setLeaving((prev) => !prev);
  // const onBoxClicked = (movieId: number) => {
  //   navigate(`/movies/${movieId}`);
  // };
  // const onOverlayClick = () => navigate("/");
  // const clickedMovie =
  //   bigMovieMatch?.params.movieId &&
  //   data?.results.find((movie) => movie.id === +bigMovieMatch.params.movieId!);
  // console.log(clickedMovie);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner section="movie" contents={nowPlayingList?.results[0]} />
          {/* <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner> */}
          {/* <Slider
            section="movie"
            title={t("category.movie.nowPlaying")}
            list={nowPlayingList}
            zindex={3}
          />
          <Slider
            section="movie"
            title={t("category.movie.popular")}
            list={popularList}
            zindex={3}
          />
          <Slider
            section="movie"
            title={t("category.movie.topRated")}
            list={topRatedList}
            zindex={2}
          />
          <Slider
            section="movie"
            title={t("category.movie.upcoming")}
            list={upcomingList}
            zindex={1}
          /> */}
          {/* <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={RowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      initial="normal"
                      whileHover="hover"
                      variants={BoxVariants}
                      onClick={() => onBoxClicked(movie.id)}
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={InfoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  style={{ top: scrollY + 100 }}
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence> */}
        </>
      )}
    </Wrapper>
  );
}
export default Home;

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Banner = styled.div<{ bgPhoto: string }>`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
//     url(${(props) => props.bgPhoto});
//   background-size: cover;
// `;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;
