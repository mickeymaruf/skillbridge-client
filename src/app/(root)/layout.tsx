import { Navbar1 } from "@/components/navbar1";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar1 />
      {children}
    </div>
  );
}

export default RootLayout;
