import Image from "next/image";
import alien from "/public/images/alien.svg";
import Badge from "@/components/badge";

export default function IconCard() {
  return (
    <div
      className={
        "rounded-3xl bg-dottt-light-grey-secondary size-56 flex flex-col items-center justify-between p-4"
      }
    >
      <Badge />
      <Image src={alien} alt={"alien icon"} className={"size-14"} />
      <p className={"text-center text-sm"}>ALIEN</p>
    </div>
  );
}
