import React from "react";
import Image from "next/image";
import enamd from "./../../../public/enamad.png";
import apple from "./../../../public/icons8-apple.svg";
import store from "./../../../public/icons8-google-play.svg";

function Footer() {
  return (
    <div className="bg-amber-950">
      <div className="w-6xl m-auto max-xl:container max-sm:px-3 grid grid-cols-2">
        <div className="flex items-center flex-col">
          <div>
            <h2 className="text-3xl text-white">
              download our app to get most out of it
            </h2>
            <ul className="pl-5 list-disc text-white">
              <li>
                <p className="text-white">
                  Small text like “Shop faster & get exclusive deals in our app!
                </p>
              </li>
              <li>
                <p className="text-white">
                  A short line like “Early access to new arrivals & app-only
                  discounts — download now”
                </p>
              </li>
            </ul>
          </div>
          <Image src={enamd} alt="QR code" />
          <div className="flex items-center gap-3 mt-5">
            <button className="flex items-center gap-1 justify-between rounded bg-amber-50 px-6 py-2 cursor-pointer">
              <Image className="" src={apple} alt="" />
              <span className="">Apple Store</span>
            </button>
            <button className="flex items-center gap-1 justify-between rounded bg-amber-50 px-6 cursor-pointer py-2">
              <Image
                src={store}
                alt="flex items-center gap-1 justify-between rounded bg-black"
              />
              <span className="">Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
