export default function NavLink(props) {
  return (
    <>
      <li>
        <a href={props.link}> {props.name.toUpperCase()}</a>
      </li>
    </>
  );
}
