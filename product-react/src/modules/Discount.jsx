import PriceWithDiscount from "./PriceWithDiscount";

export default function Discount(props) {
  // return console.log(props.art, "Discount.jsx");
  return (
    <>
      {props.art.discount ? (
        <PriceWithDiscount art={props.art} />
      ) : (
        <li>
          <span className="identifier">Price:</span> <span>{props.art.price} ,-</span>
        </li>
      )}
    </>
  );
}
