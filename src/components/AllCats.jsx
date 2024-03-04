import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import logo from "../assets/heart.svg";

function AllCats() {
  const [cats, setCats] = useState(() => {
    return JSON.parse(localStorage.getItem("cats")) || [];
  });

  useEffect(() => {
    if (cats.length === 0) {
      async function fetchData() {
        try {
          const { data } = await axios(
            "https://api.thecatapi.com/v1/images/search?limit=10"
          );
          setCats(data);
          localStorage.setItem("cats", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }
  }, [cats]); 

 

  const addToFavoritesInAllCats = (id, url) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, isFavorite: !cat.isFavorite };
      }
      return cat;
    });
    setCats(updatedCats);

    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteCats")) || [];
    const updatedFavorites = [...storedFavorites, { id, url }];
    localStorage.setItem("favoriteCats", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="content__all">
      <ul className="content__all-list">
        {cats.map(({ id, url, isFavorite }) => (
          <Cart
            isfavorite={isFavorite}
            key={id}
            url={url}
            addToFavorites={() => addToFavoritesInAllCats(id, url)}
            logo={logo}
          />
        ))}
      </ul>
    </div>
  );
}

export default AllCats;
