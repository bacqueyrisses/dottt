import Image from "next/image";
import check from "/public/images/check.svg";

export default function AuthPage() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  font-ibm">
      <section className="flex flex-col gap-6 row-start-2 items-center w-full container max-w-fit text-dottt-black">
        <div className={"space-y-4 w-full"}>
          <form
            action={"formAction"}
            className="flex gap-2 items-center flex-col bg-dottt-light-grey p-4 rounded-3xl w-full"
          >
            <div
              className={
                "py-6 flex flex-col gap-3 items-center justify-center text-center font-medium"
              }
            >
              <p className={"text-lg font-dotted"}>UPGRADE TO DOTTT PRO</p>
              <div className={"text-sm"}>
                <p>ENTER YOUR EMAIL ADDRESS</p>
                <p>AND WE’LL SEND YOU A</p>
                <p>MAGIC LINK.</p>
              </div>
            </div>
            <section className={"flex gap-4"}>
              <div className={"w-[350px] h-[478px]"}>
                <div className={"rounded-2xl bg-[#CDD3D7] p-2"}>
                  <div className={"px-4"}>
                    <p className={"text-sm mt-2"}>ANNUAL</p>
                    <p className={"text-5xl font-dotted"}>$70</p>
                    <div className={"text-lg mt-10 space-y-2"}>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span> ACCESS ALL ICONS</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>NEW ICONS EVERY WEEK</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>COMMERCIAL USE</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>SVG SOURCES FILES</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>FIGMA FILES</span>
                        {/*<div*/}
                        {/*  className={*/}
                        {/*    "bg-[#1D1D1D] rounded text-white text-[8px] px-4"*/}
                        {/*  }*/}
                        {/*>*/}
                        {/*  SOON*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </div>
                  <button
                    className={
                      "rounded-lg bg-[#1D1D1D] text-white w-full text-base mt-20 py-3"
                    }
                  >
                    SELECTED
                  </button>
                </div>
                <div className={"rounded-2xl"}></div>
              </div>
              <div className={"w-[350px] h-[478px]"}>
                <div className={"rounded-2xl bg-[#CDD3D7] p-2"}>
                  <div className={"px-4"}>
                    <p className={"text-sm mt-2"}>ANNUAL</p>
                    <p className={"text-5xl font-dotted"}>$70</p>
                    <div className={"text-lg mt-10 space-y-2"}>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span> ACCESS ALL ICONS</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>NEW ICONS EVERY WEEK</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>COMMERCIAL USE</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>SVG SOURCES FILES</span>
                      </div>
                      <div className={"flex items-center gap-2"}>
                        <Image
                          className={"size-6"}
                          src={check}
                          alt="DOTTT logo"
                          priority
                        />
                        <span>FIGMA FILES</span>
                        {/*<div*/}
                        {/*  className={*/}
                        {/*    "bg-[#1D1D1D] rounded text-white text-[8px] px-4"*/}
                        {/*  }*/}
                        {/*>*/}
                        {/*  SOON*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </div>
                  <button
                    className={
                      "rounded-lg bg-[#1D1D1D] text-white w-full text-base mt-20 py-3"
                    }
                  >
                    SELECTED
                  </button>
                </div>
                <div className={"rounded-2xl"}></div>
              </div>
            </section>
            <div className={"flex justify-center items-center gap-10 text-sm"}>
              <button>CONTACT</button>
              <button>LICENSING</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
