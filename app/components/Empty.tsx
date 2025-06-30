import React from "react";
import { TbMoodEmpty } from "react-icons/tb";

export const Empty = ({ message }: { message: React.ReactNode }) => {
  return (
    <div className="flex h-40 w-full flex-col items-center justify-center gap-2">
      <TbMoodEmpty size={48} />
      <p>{message}</p>
    </div>
  );
};
