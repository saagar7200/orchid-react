import React from "react";
import { AiOutlinePushpin } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";
import { GoPencil } from "react-icons/go";
const NoteCard = () => {
  return (
    <div className="flex flex-col gap-4 w-[350px] border border-blue-200 p-4 rounded-md shadow">
      <div className="flex justify-between ">
        <p className="text-lg font-semibold">Note Title</p>
        <AiOutlinePushpin size={28} className="text-blue-500 cursor-pointer" />
      </div>
      <div className="">
        <p className="text-sm text-gray-700">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ut
          quos molestiae enim cum voluptatum expedita similique culpa animi rem
        </p>
      </div>

      <div className="flex items-center justify-end gap-4">
        <GoPencil size={22} className="text-green-400 cursor-pointer" />
        <CgTrashEmpty size={22} className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default NoteCard;
