import React from "react";
import Card from "../components/Card";

const Home = ({
  items,
  serchValue,
  setSearchValue,
  onChangeSerchValue,
  onAddToFavorite,
  onAddToCart,
}) => {

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {serchValue ? `Поиск по запросу: "${serchValue}"` : "Все кросовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {serchValue && (
            <img
              className="clear cu-p"
              onClick={() => setSearchValue("")}
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSerchValue}
            value={serchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(serchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
