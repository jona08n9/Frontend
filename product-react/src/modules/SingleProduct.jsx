export default function SingleProduct(props) {
  console.log(props.art, "hello");
  return (
    <li className="productContainer">
      <h2>{props.art.productdisplayname}</h2>
      <ul>
        <li>
          <span className="identifier">Articletype:</span> <span>{props.art.articletype}</span>
        </li>
        <li>
          <span className="identifier">Brandname:</span> <span>{props.art.brandname}</span>
        </li>
        <li>
          <span className="identifier">Category:</span> <span>{props.art.category}</span>
        </li>
        <li>
          <span className="identifier">Subcategory:</span> <span>{props.art.subcategory}</span>
        </li>
        <li>
          <span className="identifier">Gender:</span> <span>{props.art.gender}</span>
        </li>
        <li>
          <span className="identifier">ID:</span> <span>{props.art.id}</span>
        </li>
        <li>
          <span className="identifier">Production year:</span> <span>{props.art.productionyear}</span>
        </li>
        <li>
          <span className="identifier">Season:</span> <span>{props.art.season}</span>
        </li>
        <li>
          <span className="identifier">Usagetype:</span> <span>{props.art.usagetype}</span>
        </li>
        <li>
          <span className="identifier">Price:</span> <span>{props.art.price} ,-</span>
        </li>
      </ul>
    </li>
  );
}
