import IconCard from "@/components/icon-card";
import alien from "/public/images/alien.svg";
import Image from "next/image";

export default function IconPage() {
  return (
    <main className={"container mx-auto flex flex-col my-12 gap-12"}>
      <div className={"flex bg-[#3C3D3D] w-fit mx-auto rounded-2xl"}>
        <Image src={alien} alt={"alien icon"} className={"size-8"} />
        <input type="text" />
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
      <section className={"flex flex-wrap gap-4 justify-center"}>
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </section>
    </main>
  );
}
