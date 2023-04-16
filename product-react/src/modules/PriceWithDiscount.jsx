export default function PriceWithDiscount(props) {
  //Show the price of the product minus the discount
  return (
    <li>
      <span className="identifier">Price:</span> ON SALE RIGHT NOW!!! BEFORE:<span className="beforeDiscountPrice">{props.art.price}.</span>, now only <span>{(props.art.price = -props.art.discount)}!!!</span>. <p>Save {props.art.discount} ,-</p>
    </li>
  );
}
