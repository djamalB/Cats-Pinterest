
import { Routes, Route } from "react-router-dom";
import AllCats from "./components/AllCats";
import FavoriteCats from "./components/FavoriteCats";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<AllCats />} />
        <Route path="/favorite" element={<FavoriteCats />} />
      </Routes>
    </div>
  );
}

export default App;
