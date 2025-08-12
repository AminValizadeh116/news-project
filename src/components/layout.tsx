import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-6xl m-auto max-xl:container max-sm:px-3">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
