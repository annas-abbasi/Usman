"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DropdownMenuDemo } from "./dropdown";

const Navbar_right_button = () => {
  return (
    <>
      <div className="hidden justify-between gap-4 items-center  md:flex ">
        <DropdownMenuDemo />
        <Image
          width={28}
          height={28}
          src="/bell_icon.svg"
          alt="Notification Icon"
        />
        <div className="button h-[42px] flex  justify-center items-center px-5  text-sm leading-3">
          <Link className="font-bold text-nowrap" href="/test">
            +NY DEAL
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <div>
          <Image
            width={28}
            height={28}
            src="/bell_icon.svg"
            alt="Notification Icon"
          />
        </div>
        <button className="bg-dealguru-blue text-white  h-6 rounded-full w-6 flex justify-center items-center">
          +
        </button>
        <div>
          <Image
            width={40}
            height={40}
            src="/blank_avatar_new.png"
            className="w-[40px]  h-[40px] rounded-full p-1"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar_right_button;
