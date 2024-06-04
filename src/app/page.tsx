import { FlagValues } from "@vercel/flags/react";
import Docs from "@/components/Docs";
import Header from "@/components/Header";
import HeroNext from "@/components/HeroNext";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Header />
      <HeroNext />
      <Docs />
      <FlagValues values={{ heroFlag: true }} />
    </main>
  );
}
