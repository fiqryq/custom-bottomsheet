import { IBottomSheet } from "./types";

export const BottomSheet = ({
  open,
  children,
  title,
  onClose,
}: IBottomSheet): JSX.Element => {
  return (
    <div
      className={`fixed bottom-0 ${
        open ? "z-20 opacity-100 ease-in" : "-z-20 opacity-0 ease-out"
      } h-screen max-w-480 rounded-t-2xl bg-white shadow-sm transition duration-200`}
    >
      <div className="relative border-b-[1px] py-4">
        <div className="absolute left-3 top-0 flex h-full flex-col items-center justify-center">
          <div
            className="h-5 w-5 cursor-pointer bg-slate-500"
            onClick={onClose}
          ></div>
        </div>
        <h1 className="text-center text-xl font-semibold">{title}</h1>
      </div>
      <div className="no-scrollbar h-full overflow-y-scroll p-3 pb-32">
        {children}
      </div>
      <div className="fixed bottom-0 mx-auto w-full max-w-480 bg-white p-3">
        <button className="w-full bg-sky-500 p-3 text-white" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};
