// app/layout.tsx

import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js",
    template: "%s | Next.js",
  },
  description: "Next.js is a React framework.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen grid-rows-[auto_5fr_auto]">
          <header className="bg-blue-950 text-white px-2 py-2 text-xl font-bold">
            Header
          </header>
          <div className="overflow-scroll">{children}</div>
          <footer className=" bg-blue-950 text-white px-2 py-2 text-xl font-bold relative bottom-0 w-full">
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
