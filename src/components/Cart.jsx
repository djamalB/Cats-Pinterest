import React from "react";

function Cart({
  id,
  url,
  addToFavorites,
  logo,
  logo2,
  isfavorite,
  removeFromFavorites,
}) {
  return (
    <div className="cart__content">
      <li className="content__all-item" key={id}>
        <img className="content__cart-img" src={url} alt="" />
        <div className="content__btn">
          {!isfavorite ? (
            <img
              className="content__icon-img"
              src={logo}
              alt=""
              width={"48px"}
              height={"48px"}
              onClick={addToFavorites}
            />
          ) : (
            <img
              className="content__icon-img2"
              src={logo2}
              alt=""
              width={"48px"}
              height={"48px"}
              onClick={() => removeFromFavorites(id)}
            />
          )}
        </div>
      </li>
    </div>
  );
}

export default Cart;
