import { IBottomSheet } from "./types";

export const BottomSheet = ({
  open,
  children,
  title,
}: IBottomSheet): JSX.Element => {
  return (
    <div
      hidden={!open}
      className="absolute bottom-0 z-20 w-full rounded-t-lg bg-gray-300 p-5 shadow-sm"
    >
      <div>
        <h1 className="text-center text-xl font-semibold">{title}</h1>
      </div>
      {children}
    </div>
  );
};
