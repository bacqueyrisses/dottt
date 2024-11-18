"use client";
import alien from "/public/images/alien.svg";
import Image from "next/image";
import { useQueryState } from "nuqs";

export default function Search() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  return (
    <div className={"flex bg-[#3C3D3D] w-fit mx-auto rounded-2xl"}>
      <Image src={alien} alt={"alien icon"} className={"size-8"} />
      <input
        type="text"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={"flex"}>
        <div className={"bg-[#1D1D1D] flex justify-center items-center"}>
          <Image
            src={alien}
            alt={"alien icon"}
            className={"size-6 text-blue-100"}
          />
        </div>
        <div>
          <Image src={alien} alt={"alien icon"} className={"size-6"} />
        </div>
        <div>
          <Image src={alien} alt={"alien icon"} className={"size-6"} />
        </div>
      </div>
    </div>
  );
}
