import Link from "next/link";
import React from "react";

function CountryPart() {
  const countryList = [
    { country: "Frace", href: "/country", query: { name: "france" } },
    { country: "China", href: "/country", query: { name: "china" } },
    {
      country: "USA",
      href: "/country",
      query: { name: "united states of america" },
    },
    { country: "Germany", href: "/country", query: { name: "germany" } },
    { country: "canada", href: "/country", query: { name: "canada" } },
  ];
  return (
    <div className="bg-orange-50 rounded-2xl mt-15 mb-5 p-5">
      <h2 className="text-2xl font-black mb-5">country: </h2>
    <div className="grid-cols-5 grid gap-5  max-sm:gap-2 max-sm:px-1">
      {countryList.map((item) => (
        <Link
          key={item.country}
          className="bg-red-950 text-white font-bold rounded hover:scale-110 text-xl max-sm:text-xs py-2 flex justify-center"
          href={{ pathname: item.href, query: item.query }}
        >
          {item.country}
        </Link>
      ))}
      </div>
    </div>
  );
}

export default CountryPart;
