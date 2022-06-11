import { IContainer } from "./types";

export const Container = ({ children }: IContainer) => {
  return (
    <main className="relative mx-auto h-screen max-w-480 bg-gray-300/20">
      {children}
    </main>
  );
};
