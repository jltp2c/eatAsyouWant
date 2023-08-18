import Items from "@/components/Items";
import Ordering from "@/components/Ordering";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <Slider />
      <Items />
      <Ordering />
    </main>
  );
}
