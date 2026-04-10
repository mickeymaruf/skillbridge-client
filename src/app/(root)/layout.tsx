import Navbar from "@/app/(root)/_components/navbar";
import Footer from "@/components/footer";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f8f9fa] dark:bg-zinc-950">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
