import MainPage from "@/components/Main";
import Navbar from "@/components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <MainPage />
      </div>
    </main>
  );
}
