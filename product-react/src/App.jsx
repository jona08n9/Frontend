import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./modules/ProductList";
import SideBar from "./modules/SideBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + page * 10)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
      });
  }, [page]);

  function addProduct(product) {
    setBasket((oldBasket) => oldBasket.concat(product));
    console.log("basket", basket);
  }

  function removeProduct(id) {
    //By filtering by the clicked items id, we say that "If you do not have this id, you are in the filter and we keep you".
    setBasket((oldBasket) => oldBasket.filter((product) => product.id !== id));
  }

  function clearBasket() {
    setBasket((oldBasket) => (oldBasket = []));
  }

  return (
    <>
      {articles.length === 0 ? (
        <p>LOADING..................</p>
      ) : (
        <div className="App">
          <section>
            <h1>Products</h1>
            <button onClick={() => setPage((oldPage) => oldPage + 1)}>Load 10 more products</button>
            <h6>Now showing {articles.length} products.</h6>

            <ProductList articles={articles} addProduct={addProduct} />
          </section>
          <section className="sidebar">
            <SideBar basket={basket} clearBasket={clearBasket} />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
