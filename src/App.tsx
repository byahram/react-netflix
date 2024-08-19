import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header.tsx";
import Search from "./pages/Search.tsx";
import Tv from "./pages/Tv.tsx";
import Movie from "./pages/Movie.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/movie" />}></Route>
        <Route path="movie" element={<Movie />}></Route>
        <Route path="tv" element={<Tv />}></Route>
        {/* <Route path="/search" element={<Search />}></Route> */}
        {/* <Route path={"*"} element={<NotFound />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
