import React from "react";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import logo2 from "../assets/favorite2.png";

function FavoriteCats() {
  const [favoriteCatsInFavoritePage, setFavoriteCatsInFavoritePage] = useState(
    []
  );

  useEffect(() => {
    const storedFavoriteCats =
      JSON.parse(localStorage.getItem("favoriteCats")) || [];
    setFavoriteCatsInFavoritePage(storedFavoriteCats);
  }, []);

  function removeFromFavoritesInFavoritePage(id) {
    const removePage = favoriteCatsInFavoritePage.filter(
      (cat) => cat.id !== id
    );
    localStorage.setItem("favoriteCats", JSON.stringify(removePage));
    setFavoriteCatsInFavoritePage(removePage);
  }

  return (
    <div className="favorite__cats">
      {favoriteCatsInFavoritePage.length === 0 ? (
        <p>
          У вас нет избранных котиков. Выберите котов на странице "Все котики".
        </p>
      ) : (
        <ul className="favorite__cats-list">
          {favoriteCatsInFavoritePage.map(({ id, url }) => (
            <Cart
              key={id}
              isfavorite
              url={url}
              logo2={logo2}
              removeFromFavorites={() => removeFromFavoritesInFavoritePage(id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteCats;
