import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  console.log("navData", navData);
  return (
    <>
      <nav>
        {navData.map((e) => {
          return <Anchor href={"/dogs/" + e.slug}> {e.title} </Anchor>;
        })}
      </nav>
      {children}
      <footer>Footer</footer>
    </>
  );
}
