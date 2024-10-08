import Image from "next/image";
import alien from "/public/images/alien.svg";

export default function IconPage() {
  return (
    <section className={"flex"}>
      <div className={"rounded-lg bg-dottt-light-grey-secondary aspect-square"}>
        <div className={"text-end"}>PRO</div>
        <Image src={alien} alt={"alien icon"} />
        <p className={"text-center"}>ALIEN</p>
      </div>
    </section>
  );
}
