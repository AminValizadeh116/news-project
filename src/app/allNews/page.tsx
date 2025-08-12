import NewsCart from "@/components/newsCart";
import getNews from "@/services/api";
import { Root } from "@/types/services";
import React from "react";

async function page() {
  const data: Root = await getNews();

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.status !== "error" ? (
        data.results.map((item) => (
          <NewsCart key={item.article_id} {...item} size="lg" />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default page;
