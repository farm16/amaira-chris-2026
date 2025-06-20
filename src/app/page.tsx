import BurgerButton from "./components/BurgerButton/BurgerButton";
import IntlButton from "./components/IntlButton/IntlButton";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <BurgerButton />
      <IntlButton />
    </div>
  );
}
