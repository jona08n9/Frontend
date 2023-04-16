import Basket from "./Basket";

export default function SideBar(props) {
  return (
    <article>
      <Basket basket={props.basket} clearBasket={props.clearBasket} removeProduct={props.removeProduct} />
    </article>
  );
}
