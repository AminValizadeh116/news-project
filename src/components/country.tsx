"use client";
import getNews from "@/services/api";
import { Root } from "@/types/services";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import NewsCart from "./newsCart";

function Country() {
  const searchParams = useSearchParams()
  const country: string | null = searchParams.get('name')
  const [data, setData] = useState<Root>();
  useEffect(() => {
    getNews().then(setData);
  }, []);
  return (
  <div>
    <h2 className="max-sm:xl max-sm:font-bold pt-10">{country}</h2>
    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 pb-15">
      {data?.status !== "error" ? (
        data?.results
          .filter((i) => i.country.includes(country as string))
          .map((item) => <NewsCart {...item} size="lg" key={item.article_id}/>)
      ) : (
        <p>loading</p>
      )}
    </div>
    </div>
  );
}

export default Country;
