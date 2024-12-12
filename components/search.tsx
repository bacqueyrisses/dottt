"use client";
import alien from "/public/images/alien.svg";
import Image from "next/image";
import { useQueryState } from "nuqs";
import AccountDialog from "@/components/account-dialog";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/ui/dropdown";

export default function Search() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  return (
    <div
      className={
        "bg-[#3C3D3D] w-1/2 mx-auto rounded-2xl p-2 flex items-center justify-between drop-shadow-2xl"
      }
    >
      <Image src={alien} alt={"alien icon"} className={"size-8"} />
      <input
        type="text"
        placeholder={"SEARCH AN ICON..."}
        defaultValue={search}
        className={
          "py-1 bg-[#2A2A2A] w-1/2 placeholder:text-sm rounded-lg placeholder:text-center placeholder:font-ibm text-[#A0A2A4]  p-4 text-center  placeholder:text-dottt-light-grey-secondary uppercase focus:placeholder:caret-dottt-black focus:outline-none focus:placeholder:text-transparent"
        }
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={"flex items-center gap-2"}>
        <div
          className={
            "bg-[#1D1D1D] p-1 flex justify-center items-center rounded-md"
          }
        >
          <Image
            src={alien}
            alt={"alien icon"}
            className={"size-6 text-blue-100"}
          />
        </div>

        <Dropdown>
          <DropdownButton>
            <div
              className={
                "bg-[#1D1D1D] p-1 flex justify-center items-center rounded-md"
              }
            >
              <Image src={alien} alt={"alien icon"} className={"size-6"} />
            </div>
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem href="/users/1">ACCOUNT</DropdownItem>
            <DropdownItem href="/users/1/edit">LOG OUT</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <AccountDialog />
      </div>
    </div>
  );
}
