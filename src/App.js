import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import Card from './components/Card';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6263ce97c430dc560d31b618.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  },[])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => {
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавить в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
