"use client";

import { TbPlaylist, AiOutlinePlus } from "@/assets";

interface LibraryProps {}
const Library: React.FC<LibraryProps> = ({}) => {
  const onClick = () => {
    //handle upload
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="cursor-pointer transition text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-5">List of songs!</div>
    </div>
  );
};

export default Library;
