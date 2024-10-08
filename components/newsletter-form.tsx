"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import addNewsletter from "@/server/actions/newsletter";
import { initialState } from "@/lib/definition";
import { toast } from "sonner";
import Image from "next/image";
import close from "/public/images/close.svg";
import check from "/public/images/check.svg";

export default function NewsletterForm() {
  const [isInputEmail, setIsInputEmail] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [state, formAction] = useFormState(addNewsletter, initialState);

  useEffect(() => {
    console.log("🟢", state);
    if (state?.success === true) {
      toast.success(
        <div className={"flex gap-3 flex-nowrap items-center w-full"}>
          <div
            className={
              "bg-black rounded-lg flex items-center justify-center p-1"
            }
          >
            <Image className={"size-5"} src={check} alt="DOTTT logo" priority />
          </div>
          <div className={"space-x-2"}>
            <span className={"font-bold"}>ALL SET.</span>
            <span>CHECK YOUR EMAIL SOON.</span>
          </div>
        </div>,
      );
    }

    if (state?.success === false) {
      toast.success(
        <div className={"flex gap-3 flex-nowrap items-center w-full"}>
          <div
            className={
              "bg-black rounded-lg flex items-center justify-center p-1"
            }
          >
            <Image className={"size-5"} src={close} alt="DOTTT logo" priority />
          </div>
          <div className={"space-x-2"}>
            <span className={"font-bold"}>ERROR.</span>
            <span>EMAIL ALREADY SENT.</span>
          </div>
        </div>,
      );
    }
  }, [state]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <form
        action={formAction}
        className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full"
      >
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(event.target.value)) {
      setIsInputEmail(true);
    } else {
      setIsInputEmail(false);
    }
  };

  return (
    <form
      action={formAction}
      className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full"
    >
      <input
        type="email"
        name={"email"}
        className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
        onChange={handleChange}
        placeholder={"EMAIL ADDRESS"}
      />
      <SubmitForm isInputEmail={isInputEmail} />
    </form>
  );
}

function SubmitForm({ isInputEmail }: { isInputEmail: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type={"submit"}
      tabIndex={0}
      disabled={!isInputEmail || pending}
      className={
        "hover:bg-dottt-black disabled:bg-dottt-black disabled:cursor-not-allowed w-full p-4 rounded-2xl text-center text-white disabled:text-dottt-light-grey-secondary bg-black text-sm"
      }
    >
      GET NOTIFIED
    </button>
  );
}
