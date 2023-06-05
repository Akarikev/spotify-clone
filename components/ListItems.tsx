"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ListItemsProps {
  image: string;
  name: string;
  href: string;
}

const ListItems: FC<ListItemsProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    //add auth before push
    router.push(href);
  };

  return (
    <button
      className="
  relative 
  group
  flex
  items-center
  rounded-lg
  overflow-hidden
  gap-x-4
  bg-neutral-100/10
  hover:bg-neutral-100/20
  transition
  pr-4
  "
    >
      <div
        className="
      relative
      min-h-[64px]
      min-w-[64px]
      
      "
      >
        <Image />
      </div>
    </button>
  );
};

export default ListItems;
