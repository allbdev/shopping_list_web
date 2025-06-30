import NextLink from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export function Link({ link, label }: { link: string; label: string }) {
  return (
    <NextLink href={link}>
      <div className="flex w-full items-center justify-between border-b p-2">
        <span className="truncate">{label}</span>
        <IoIosArrowForward />
      </div>
    </NextLink>
  );
}
