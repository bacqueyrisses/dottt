"use client";
import { toast } from "sonner";
import icon from "/public/images/icon.svg";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function NewsletterForm() {
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsInputEmpty(event.target.value === "");
  };
  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    event.preventDefault();
    toast.success(
      <div className={"flex gap-3 flex-nowrap items-center w-full"}>
        <Image className={"size-8"} src={icon} alt="DOTTT logo" priority />
        <div className={"space-x-2"}>
          <span className={"font-bold"}>VALIDATED.</span>
          <span>CHECK YOUR EMAILS!</span>
        </div>
      </div>,
    );
  };

  return (
    <form className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full">
      <input
        type="text"
        className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:text-dottt-black focus:outline-none ${
          isInputEmpty ? "caret-transparent" : "caret-dottt-black"
        }`}
        onChange={handleChange}
        placeholder={"YOUR EMAIL..."}
      />
      <button
        onClick={handleClick}
        className={
          "hover:bg-[#383838] text-dottt-light-grey-secondary w-full p-4 rounded-2xl text-center bg-dottt-black text-sm"
        }
      >
        VALIDATE
      </button>
    </form>
  );
}
