export default function BasketItem(props) {
  return (
    <li>
      <span>{props.prod.productdisplayname}</span>
      <button onClick={() => props.removeProduct(props.prod.id)}>Remove Item</button>
    </li>
  );
}
