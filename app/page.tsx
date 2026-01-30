import { inter, poppins } from "./layout";
import Home from "@/components/features/Home/home";

export default function HomePage() {
  const poppings = poppins;
  const inters = inter;
  return <Home poppings={poppings} inters={inters} />;
}
