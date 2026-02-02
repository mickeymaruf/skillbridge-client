import { Navbar1 } from "@/app/(root)/_components/navbar1";
import { Footer2 } from "@/components/footer2";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-10">
      <Navbar1 />
      {children}
      <Footer2 />
    </div>
  );
}

export default RootLayout;
