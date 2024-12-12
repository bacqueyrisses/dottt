"use client";
import Image from "next/image";
import alien from "/public/images/alien.svg";
import Badge from "@/components/badge";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import check from "/public/images/check.svg";

export default function IconCard() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={
          "rounded-3xl bg-dottt-light-grey-secondary size-56 flex flex-col items-center justify-between p-4"
        }
        onClick={() => setOpen(true)}
      >
        <Badge />
        <Image src={alien} alt={"alien icon"} className={"size-14"} />
        <p className={"text-center text-sm"}>ALIEN</p>
      </button>
      <Dialog
        size={"xl"}
        className={"bg-[#BABFC2] h-full relative"}
        open={open}
        onClose={setOpen}
      >
        <button
          type={"button"}
          onClick={() => setOpen(false)}
          className={
            "absolute -top-12 right-0 bg-[#CDD3D7] p-4 rounded-md size-6 flex items-center justify-center"
          }
        >
          <Image
            src={alien}
            alt={"alien icon"}
            className={"absolute size-10"}
          />
        </button>
        <section className={"flex flex-col gap-3 items-start justify-between"}>
          <section
            className={"flex gap-3 items-center justify-center h-80 w-full"}
          >
            <div
              className={
                "bg-[#D8DDE0] rounded-lg flex-col h-full w-full flex justify-center items-center"
              }
            >
              <div
                className={
                  "p-10 h-2/3 flex justify-center items-center flex-col"
                }
              >
                <Image src={alien} alt={"alien icon"} className={"size-20"} />
                <div
                  className={
                    "border-[#A8ADB0] border-x-1 border-b-1 border-t-0 border w-24 h-2"
                  }
                />
                <p className={"font-ibm text-sm mt-2"}>96 PX</p>
              </div>
              <div
                className={
                  "border-t-1 border-x-0 border-b-0 border border-dashed border-[#A8ADB0] w-full flex justify-center items-center h-1/3"
                }
              >
                <div
                  className={"w-full flex justify-center items-end  font-ibm"}
                >
                  <div className={"flex flex-col justify-center items-center"}>
                    <Image
                      src={alien}
                      alt={"alien icon"}
                      className={"size-10"}
                    />
                    <p>32</p>
                  </div>
                  <div className={"flex flex-col justify-center items-center"}>
                    <Image
                      src={alien}
                      alt={"alien icon"}
                      className={"size-8"}
                    />
                    <p>24</p>
                  </div>
                  <div className={"flex flex-col justify-center items-center"}>
                    <Image
                      src={alien}
                      alt={"alien icon"}
                      className={"size-6"}
                    />
                    <p>16</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex gap-3 flex-col h-full w-full"}>
              <div
                className={
                  "bg-[#1D1D1D] rounded-lg h-1/3 flex items-center justify-center"
                }
              >
                <Image src={alien} alt={"alien icon"} />
              </div>
              <div
                className={
                  "bg-[#A8ADB0] rounded-lg h-2/3 flex flex-col items-center justify-center"
                }
              >
                <div
                  className={
                    "bg-[#1D1D1D] rounded-3xl size-20 flex items-center justify-center"
                  }
                >
                  <Image src={alien} alt={"alien icon"} className={"size-10"} />
                </div>
              </div>
            </div>
          </section>
          <p className={"font-dotted text-2xl"}>ALIEN</p>
          <div className={"flex gap-3"}>
            <button
              onClick={() => {
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
                    SUCCESS!
                  </div>,
                );
              }}
              className={
                "text-sm px-6 py-2 text-[#D8DDE0] bg-[#1D1D1D] rounded-lg font-ibm"
              }
            >
              COPY SVG
            </button>
            <button
              onClick={() => {
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
                    SUCCESS!
                  </div>,
                );
              }}
              className={
                "text-sm px-6 py-2 text-[#D8DDE0] bg-[#1D1D1D] rounded-lg font-ibm"
              }
            >
              DOWNLOAD
            </button>
          </div>
        </section>
      </Dialog>
    </>
  );
}
