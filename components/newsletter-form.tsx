"use client";
import { toast } from "sonner";
import icon from "/public/images/icon.svg";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import JSConfetti from "js-confetti";

export default function NewsletterForm() {
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return (
      <form className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full">
        <input
          type="text"
          className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
          placeholder={"EMAIL ADDRESS"}
        />
        <button
          disabled={true}
          className={
            "hover:bg-dottt-black disabled:bg-dottt-black disabled:cursor-not-allowed w-full p-4 rounded-2xl text-center text-white disabled:text-dottt-light-grey-secondary bg-black text-sm"
          }
        >
          GET NOTIFIED
        </button>
      </form>
    );

  const jsConfetti = new JSConfetti();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(event.target.value)) {
      setIsInputEmail(true);
      void jsConfetti.addConfetti({
        emojis: ["💌"],
        emojiSize: 100,
        confettiNumber: 3,
      });
    } else {
      setIsInputEmail(false);
    }
  };

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    event.preventDefault();
    toast.success(
      <div className={"flex gap-3 flex-nowrap items-center w-full"}>
        <Image className={"size-8"} src={icon} alt="DOTTT logo" priority />
        <div className={"space-x-2"}>
          <span className={"font-bold"}>ALL SET.</span>
          <span>CHECK YOUR EMAIL SOON.</span>
        </div>
      </div>,
    );
  };

  return (
    <form className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full">
      <input
        type="text"
        className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
        onChange={handleChange}
        placeholder={"EMAIL ADDRESS"}
      />
      <button
        onClick={handleClick}
        disabled={!isInputEmail}
        className={
          "hover:bg-dottt-black disabled:bg-dottt-black disabled:cursor-not-allowed w-full p-4 rounded-2xl text-center text-white disabled:text-dottt-light-grey-secondary bg-black text-sm"
        }
      >
        GET NOTIFIED
      </button>
    </form>
  );
}
