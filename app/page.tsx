import Hero from "./components/hero";
import Product from "./components/product";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-blue-300 font-sans ">
      <Hero />
      <Product />
    </div>
  );
}
