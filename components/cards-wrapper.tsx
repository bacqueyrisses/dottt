"use client";
import { useSearchParams } from "next/navigation";
import IconCard from "@/components/icon-card";

export default function CardsWrapper() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return (
    <section className={"flex flex-wrap gap-4 justify-center"}>
      <IconCard />
    </section>
  );
}
