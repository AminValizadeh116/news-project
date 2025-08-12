"use client";
import NewsCart from "@/components/newsCart";
import getNews from "@/services/api";
import { Root } from "@/types/services";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Category() {
  const [data, setData] = useState<Root>();
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("name");

  useEffect(() => {
    getNews().then((data) => setData(data));
  }, []);
  console.log(data)

  return (
    <div className="grid grid-cols-3 overflow-auto pr-5 gap-5">
      {data?.status !== "error" ? (
        data?.results
          .filter((i) => i.category.includes(search as string))
          .map((item) => 
            <NewsCart key={item.article_id} {...item} size="lg" />
          )
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default Category;

