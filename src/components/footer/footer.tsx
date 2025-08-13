import React from "react";
import Image from "next/image";
import Qrcode from "./../../../public/QRcode.svg";
import apple from "./../../../public/icons8-apple.svg";
import store from "./../../../public/icons8-google-play.svg";
import laptop from "./../../../public/laptop.png";
import phone from "./../../../public/phone.png";

function Footer() {
  return (
    <div className="bg-rose-950 rounded-t-3xl">
      <div className="w-6xl m-auto max-xl:container md:grid md:grid-cols-3 max-md:flex max-md:flex-col-reverse max-sm:px-5 py-10">
        <div className="col-span-2 text-white pt-18">
          <h2 className="text-3xl font-black pb-5">download our app to get most out of it</h2>
          <ul className="list-disc text-white pl-5">
            <li><p>Small text like “Shop faster & get exclusive deals in our app!</p></li>
            <li><p>A short line like “Early access to new arrivals & app-only discounts — download now”</p></li>
          </ul>
          <div className="pt-8 flex justify-center">
          <Image src={Qrcode} alt="Qrcode" className="2xl:h-80 2xl:w-80 h-50 object-contain w-50 max-lg:w-40 max-lg:h-40 max-md:h-30 max-md:w-30"/>
          </div>
          <div className="flex gap-3 justify-center py-5">
            <button className="flex items-center gap-2 bg-amber-50 px-2 rounded"> <Image src={apple} alt="apple" /> <span className="text-rose-950">apple store</span> </button>
            <button className="flex items-center gap-2 bg-amber-50 px-2 rounded"> <Image src={store} alt="store" /> <span className="text-rose-950">google store</span> </button>
          </div>
        </div>
        <div className="">
          <Image src={phone} alt="phone" className="max-h-150 object-contain max-md:hidden"/>
          <Image src={laptop} alt="laptop" className="max-h-150 object-contain md:hidden"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
