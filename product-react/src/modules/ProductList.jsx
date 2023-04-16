import SingleProduct from "./SingleProduct";

export default function ProductList(props) {
  console.log(props.articles);
  return (
    <ul className="productContainer_grid">
      {props.articles.map((art) => (
        <SingleProduct art={{ ...art }} />
      ))}
    </ul>
  );
}
