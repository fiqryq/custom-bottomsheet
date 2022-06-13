import { IBottomSheet } from "./types";

export const BottomSheet = ({
  open,
  children,
  title,
}: IBottomSheet): JSX.Element => {
  return (
    <div
      className={`fixed bottom-0 ${
        open ? "z-20 opacity-100 ease-in" : "-z-20 opacity-0 ease-out"
      } max-w-480 rounded-t-xl bg-white shadow-sm transition duration-150`}
    >
      <div className="relative border-b-[1px] py-4">
        <div className="absolute left-3 top-0 flex h-full flex-col items-center justify-center">
          <div className="h-5 w-5 cursor-pointer bg-slate-500"></div>
        </div>
        <h1 className="text-center text-xl font-semibold">{title}</h1>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};
