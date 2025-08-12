import Link from "next/link";
import React from "react";

function CategoryPart() {
  return (
    <div className="bg-red-950 my-5 p-10 max-sm:px-2 max-sm:py-5">
      <h2 className="max-sm:text-2xl text-4xl font-bold pb-5 text-white">categories: </h2>
      <div className="grid grid-cols-3 rounded-2xl gap-5">
        <Link
          className="text-red-900 max-sm:text-sm text-3xl font-black bg-amber-50 py-2 rounded flex justify-center hover:translate-0.5"
          href={{
            pathname: "/category",
            query: { name: "health" },
          }}
        >
          Health
        </Link>
        <Link
          className="text-red-900 text-3xl max-sm:text-sm font-black bg-amber-50 py-2 rounded flex justify-center hover:translate-0.5"
          href={{
            pathname: "/category",
            query: { name: "technology" },
          }}
        >
          technology
        </Link>
        <Link
          className="text-red-900 text-3xl max-sm:text-sm font-black bg-amber-50 py-2 rounded flex justify-center hover:translate-0.5"
          href={{
            pathname: "/category",
            query: { name: "education" },
          }}
        >
          education
        </Link>
      </div>
    </div>
  );
}

export default CategoryPart;
