import React from "react";
import newsPic from "./../../public/news.png";
import Image from "next/image";
import Link from "next/link";

function Intro() {
  return (
    <div className="grid grid-cols-5 items-center gap-15 pt-20 max-lg:gap-5 pb-15">
      <div className="col-span-2 max-lg:col-span-3">
        <Image
          src={newsPic}
          alt="news_picture"
        />
        <div className="-mt-20 ml-10 flex gap-5 max-[450px]:ml-2 max-sm:-mt-14 max-sm:gap-1">
        <Link href="/allNews" className="px-13 py-3 text-white bg-red-900 rounded-xl max-sm:text-sm max-[500px]:px-5 max-sm:py-1">read</Link>
        <Link href="/create" className="px-13 py-3 bg-white rounded-xl border border-red-900 text-red-900 max-sm:text-sm max-sm:px-8 max-sm:py-1">create</Link>
        </div>
      </div>

      <div className="col-span-3 max-lg:col-span-2">
        <h1 className="text-4xl max-md:text-2xl max-sm:text-lg font-bold pb-10 max-sm:pb-3">
          Actual Angle
        </h1>
        <p className="font-semibold italic text-lg max-sm:hidden">
          From headlines to your own lines — publish, explore, and stay curious.
        </p>
        <p className="max-md:hidden">
          Whether you are here to read breaking stories or share your own, this
          is your space to think freely, write boldly, and discover more every
          day.
        </p>
        <p className="max-sm:hidden">
          Scroll the scoop, drop your own, and maybe cause a little buzz while
          you are at it. Because why just read the news when you can be the news?
        </p>
        <p className="min-sm:hidden italic text-sm">
          From headlines to your own lines
        </p>
        <p className="min-sm:hidden text-sm">
          publish, explore, and stay curious.
        </p>
      </div>
    </div>
  );
}

export default Intro;
