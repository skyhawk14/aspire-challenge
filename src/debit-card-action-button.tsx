interface DebitCardActionButtonProps {
  src: string;
  label: string;
  onClick?: () => void;
}

export const DebitCardActionButton = ({
  src,
  label,
  onClick,
}: DebitCardActionButtonProps) => {
  return (
    <div
      className="flex flex-col content-center w-[15%] mr-4"
      onClick={onClick}
    >
      <div className="flex justify-center">
        {" "}
        <img src={src} alt={label} className="w-[24px] h-[24px]" />
      </div>
      <button className="text-[#0C365A] font-light text-sm mr-1 mt-2 inline">
        {label}
      </button>
    </div>
  );
};
