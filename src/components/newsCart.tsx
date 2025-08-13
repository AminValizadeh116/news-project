import { Result } from "@/types/services";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Isize {
  size: "sm" | "md" | "lg" | "xl";
}
type TnewsCart = Isize & Result;

function NewsCart({
  article_id,
  size,
  description,
  title,
  image_url,
  pubDate,
  source_name,
  source_icon,
}: TnewsCart) {
  const cartSize = () => {
    switch (size) {
      case "sm":
        return {
          height: "h-35 max-sm:h-25",
          width: "w-35 max-sm:w-30",
          image_h: 100,
          image_w: 100,
          h2_width: "max-w-35",
        };
      case "md":
        return {
          height: "max-h-40",
          width: "max-w-40",
          image_h: 100,
          image_w: 100,
        };
      case "lg":
        return {
          height: "max-sm:min-h-10 ",
          width: "max-sm:min-w-10",
          image_h: 200,
          image_w: 200,
          h2_width: "max-w-80"
        };
      case "xl":
        return { height: "h-50", width: "w-40", image_h: 100, image_w: 100 };
    }
  };
  return (
    <Link href={`/allNews/${article_id}`} className="bg-orange-50 shadow-orange-300 shadow my-2 p-5 rounded-2xl max-sm:p-1">
      <div className={`flex items-center pt-2 ${cartSize().width} pb-3`}>
        <img src={image_url} alt="i" className={`rounded ${cartSize().height} ${cartSize().width} object-contain`} />
      </div>
      <div>
        <h2 className={`${cartSize().h2_width} max-h-20 max-sm:h-15 max-sm:text-xs max-sm:font-semibold overflow-hidden text-xl font-bold sm:mb-3"`}>
          {title}
        </h2>
        <p className="h-10 max-sm:text-xs overflow-hidden max-sm:font-thin">
          {description}
        </p>
      </div>
      <div className="text-sm pt-5">
        <div className="flex max-sm:gap-1 gap-2 items-center">
          <img
            src={source_icon}
            alt="icone"
            className="rounded-full w-10 h-10 max-sm:h-8 max-sm:w-8"
          />
          <span className="text-gray-500 max-sm:hidden"> {source_name} </span>
        </div>
        <p className="text-gray-300 text-sm"> {pubDate} </p>
      </div>
    </Link>
  );
}

export default NewsCart;
