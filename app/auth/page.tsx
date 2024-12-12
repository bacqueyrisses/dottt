"use client";
import { toast } from "sonner";
import Image from "next/image";
import check from "/public/images/check.svg";

export default function AuthPage() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-ibm">
      <section className="flex flex-col gap-6 row-start-2 items-center w-full container max-w-sm text-dottt-black">
        <div className={"space-y-4 w-full"}>
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
            className="flex gap-2 items-center flex-col bg-dottt-light-grey p-2 rounded-3xl w-full"
          >
            <div
              className={
                "py-6 flex flex-col gap-3 items-center justify-center text-center font-medium"
              }
            >
              <p className={"text-2xl font-dotted"}>SIGN UP OR LOG IN</p>
              <div className={"text-sm"}>
                <p>ENTER YOUR EMAIL ADDRESS</p>
                <p>AND WE’LL SEND YOU A</p>
                <p>MAGIC LINK.</p>
              </div>
            </div>
            <input
              type="text"
              className={`w-full p-4 rounded-2xl text-center placeholder:text-sm placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent`}
              placeholder={"EMAIL ADDRESS"}
            />
            <button
              type={"submit"}
              className={
                "font-dotted hover:bg-dottt-black disabled:bg-dottt-black disabled:cursor-not-allowed w-full p-4 rounded-2xl text-center text-white disabled:text-dottt-light-grey-secondary bg-black"
              }
            >
              VALIDATE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
