import { Navbar1 } from "@/app/(root)/_components/navbar1";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-10">
      <Navbar1 />
      {children}
    </div>
  );
}

export default RootLayout;
