import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon:Icon,
  active,
  href,
}) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      key={label}
      className={twMerge(
        `flex flex-row w-full h-auto rounded-md px-3 gap-x-4 py-1 text-md font-medium cursor-white hover:text-white transition text-neutral-400  items-center 
      `,
        active && "text-white"
      )}
    >
     <Icon size={26} />
      <p className="truncate w-full">
        {label}
      </p>
    </Link>
  );
};

export default SidebarItem;
