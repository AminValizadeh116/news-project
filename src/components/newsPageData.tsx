import { Root } from "@/types/services";
import React from "react";

function NewsPageData({ data, id }: { data: Root; id: string }) {
    console.log(data, id)
  return (
    <div>
      {data.status !== "error" ? (
        <h2>{data.results.find((item) => item.article_id == id)?.title}</h2>
      ) : (
        <p>not catched</p>
      )}
    </div>
  );
}

export default NewsPageData;
