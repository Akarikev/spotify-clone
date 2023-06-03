import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SideBarItem: FC<SideBarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
      flex 
      flex-row
      h-auto
      items-center
      w-full
      gap-x-4
      font-medium
      text-md
      cursor-pointer
      hover:text-white
      transition
      text-neutral-400
      py-1
  `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
    </Link>
  );
};

export default SideBarItem;
