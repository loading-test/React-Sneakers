import React from "react";

const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column justify-between">
        <h2 onClick={onClose} className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex flex-column justify-between">
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    onClick={() => onRemove(obj.id)}
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ <img src="/img/go.svg" alt="Go" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
            </p>
            <button onClick={onClose} className="greenBtn">
              <img src="/img/go.svg" alt="GreenBtn" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
