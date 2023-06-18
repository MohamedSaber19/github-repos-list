import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import BookmarkedRepositories from "./components/containers/BookmarkedRepositories";
import Home from "./components/containers/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookmarked" element={<BookmarkedRepositories />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
