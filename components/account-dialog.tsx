"use client";
import { toast } from "sonner";
import check from "/public/images/check.svg";
import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import alien from "/public/images/alien.svg";

export default function AccountDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          "bg-[#1D1D1D] p-1 flex justify-center items-center rounded-md"
        }
      >
        <Image src={alien} alt={"alien icon"} className={"size-6"} />
      </button>
      <Dialog size={"md"} open={open} onClose={setOpen}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(
              <div className={"flex gap-3 flex-nowrap items-center w-full"}>
                <div
                  className={
                    "bg-black rounded-lg flex items-center justify-center p-1"
                  }
                >
                  <Image
                    className={"size-5"}
                    src={check}
                    alt="DOTTT logo"
                    priority
                  />
                </div>
                <div className={"space-x-2"}>
                  <span className={"font-bold"}>SUCCESS.</span>
                  <span>MAGIC LINK SENT.</span>
                </div>
              </div>,
            );
          }}
          action={"formAction"}
          className="relative flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full"
        >
          <button
            type={"button"}
            className={
              "absolute -top-12 right-0 bg-[#CDD3D7] p-4 rounded-md size-6 flex items-center justify-center"
            }
            onClick={() => setOpen(false)}
          >
            <Image
              src={alien}
              alt={"alien icon"}
              className={"absolute size-10"}
            />
          </button>
          <div
            className={
              "py-6 flex flex-col gap-3 items-center justify-center text-center font-medium"
            }
          >
            <p className={"text-2xl font-dotted"}>ACCOUNT</p>
            <p
              className={
                "right-3 top-3 absolute p-1.5 bg-black rounded-xl text-sm text-white"
              }
            >
              PRO
            </p>
          </div>
          <div className={"w-full text-center flex flex-col gap-2"}>
            <label className={"font-medium font-ibm"} htmlFor="email">
              E-MAIL ADDRESS
            </label>
            <input
              name={"email"}
              type="text"
              className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
              placeholder={"EMAIL ADDRESS"}
            />
            <p className={"text-xs font-ibm"}>
              USED TO SIGN IN, AND RECEIVE AWESOME ICON UPDATES.
            </p>
          </div>
          <div className={"w-full text-center flex flex-col gap-2 mt-4"}>
            <label className={"font-medium font-ibm"} htmlFor="license">
              DOTTT PRO LICENSE KEY
            </label>
            <input
              name={"license"}
              type="text"
              className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
              placeholder={"--- / --- / --- / ---"}
            />
            <p className={"text-xs font-ibm"}>
              ENTER YOUR LICENSE KEY FOR ICONIC PRO. <br />
              DON’T HAVE A KEY YET?
            </p>
          </div>

          <button
            type={"submit"}
            className={
              "mt-4 font-dotted hover:bg-dottt-black disabled:bg-dottt-black disabled:cursor-not-allowed w-full p-4 rounded-2xl text-center text-white disabled:text-dottt-light-grey-secondary bg-black"
            }
          >
            VALIDATE
          </button>
        </form>
      </Dialog>
    </>
  );
}
