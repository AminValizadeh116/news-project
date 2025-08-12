import getNews from "@/services/api";
import { Root } from "@/types/services";
import Link from "next/link";
import React from "react";

async function Contributers() {
  const data: Root = await getNews();
  const uniqueSources = data.results.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.source_id === value.source_id)
  );

  return (
    <div>
      <h2 className="text-2xl pt-10 font-black"> contributers: </h2>
      <div className="my-5 grid grid-cols-3 gap-5 max-sm:gap-3">
        {data.status !== "erorr" ? (
          uniqueSources.map((i) => (
            <div
              key={i.source_id}
              className="bg-red-950 max-sm:h-30 sm:h-45 relative rounded-4xl max-xl:rounded-xl col-span-1 max-sm:px-1 max-sm:py-1 p-5"
            >
              <div className="flex items-center gap-3 max-sm:gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={i.source_icon}
                  className="bg-red-50 w-20 h-20 rounded-full max-sm:w-8 max-sm:h-8"
                />
                <span className="text-white flex items-center sm:h-20 max-sm:text-xs max-sm:h-16 sm:text-lg overflow-hidden text-2xl font-bold">
                  {i.source_name}
                </span>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="absolute bottom-2 rounded-xl max-sm:text-xs max-sm:px-3 max-sm:py-1 mt-5 py-3 px-10 bg-rose-700 text-white hover:text-rose-800 hover:bg-white"
                  href={i.source_url}
                >
                  visit
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}

export default Contributers;
{
  /* <Link className="rounded-2xl py-3 px-10 bg-rose-900 text-white hover:text-rose-900 hover:bg-white" href={i.source_url}> visit page/website</Link> */
}
