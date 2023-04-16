import Navigation from "./Navigation";
import Logo from "./Logo";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <ContactButton />
    </header>
  );
}
