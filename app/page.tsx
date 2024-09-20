import Image from "next/image";
import NewsletterForm from "@/components/newsletter-form";
import logo from "/public/images/logo.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-ibm">
      <main className="flex flex-col gap-6 row-start-2 items-center w-full container max-w-sm text-dottt-black">
        <div className={"gap-4 flex justify-center items-center flex-col"}>
          <Image
            className={"size-32 translate-y-12"}
            src={logo}
            alt="DOTTT logo"
            priority
          />
          <p>“DOTTT” ICON-PACK</p>
        </div>
        <div className={"space-y-4 w-full"}>
          <div className={"font-medium text-center"}>
            <p>BE INFORMED WHEN THE ICON PACK</p>
            <p>IS AVAILABLE</p>
          </div>

          <NewsletterForm />
        </div>
      </main>
    </div>
  );
}
