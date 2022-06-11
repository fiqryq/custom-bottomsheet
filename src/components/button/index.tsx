import { IButton } from "./types";

export const Button = ({ label, onClick }: IButton): JSX.Element => {
  return (
    <button
      className="w-full bg-gray-400 p-2 hover:bg-gray-600 hover:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
