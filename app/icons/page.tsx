import Search from "@/components/search";
import { Suspense } from "react";
import CardsWrapper from "@/components/cards-wrapper";

export default async function IconPage() {
  return (
    <main className={"container mx-auto flex flex-col my-12 gap-12"}>
      <Suspense>
        <Search />
      </Suspense>
      <CardsWrapper />
    </main>
  );
}
