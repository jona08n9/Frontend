import BasketItem from "./BasketItem";

export default function Basket(props) {
  return (
    <>
      <h2>Basket</h2>
      <button onClick={() => props.clearBasket()}>Remove all Items</button>
      <ul>
        {props.basket.map((prod) => (
          <BasketItem prod={{ ...prod }} removeProduct={props.removeProduct} />
        ))}
      </ul>
    </>
  );
}
