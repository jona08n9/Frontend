import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./modules/ProductList";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <ProductList articles={articles} />
    </div>
  );
}

export default App;
