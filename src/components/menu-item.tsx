import React from "react";

interface MenuItemProps {
  title: string;
  Icon: string;
  height?: number;
  width?: number;
  selected?: boolean;
}

export const MenuItem = ({
  title,
  Icon,
  height = 20,
  width = 20,
  selected,
}: MenuItemProps) => {
  return (
    <div className="flex items-center gap-3 lg:text-white py-6 cursor-pointer text-black">
      <img src={Icon} alt={`icon-${title}`} height={height} />
      <p className={`${selected ? "text-[#01D167]" : ""}`}>{title}</p>
    </div>
  );
};
