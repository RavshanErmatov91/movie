import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tv, Movies } from "./pages";

import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import SingleMovie from "./pages/singleMovie";
import "./App.css";
import SearchList from "./pages/searchMovie";

function App() {
  return (
    <div className="block">
      <BrowserRouter>
        <Header />
        <div className="container">
          <main>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/movie/:id" element={<SingleMovie />} />
              <Route path="/search/:searchFilm" element={<SearchList />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
