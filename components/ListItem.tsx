"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "@/assets";
interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    //add authentication before push
    router.push(href);
  };

  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image fill src={image} className="object-cover" alt="like button" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute flex items-center justify-center transition opacity-0 group-hover:opacity-100 p-4 drop-shadow-md hover:scale-110 rounded-full right-5 bg-green-500">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
