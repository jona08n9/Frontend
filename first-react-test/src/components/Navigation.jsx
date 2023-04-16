import NavLink from "./NavLink";

export default function Navigation() {
  const links = [
    { name: "home", link: "#home" },
    { name: "second", link: "#second" },
    { name: "third", link: "#third" },
    { name: "done", link: "#done" },
  ];
  return (
    <ul>
      {links.map((link) => (
        <NavLink {...link} />
      ))}
    </ul>
  );
}
