import { IButton } from "./types";

export const Button = ({ label, onClick }: IButton): JSX.Element => {
  return (
    <button
      className="w-full bg-sky-500 p-2 text-white hover:bg-sky-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
