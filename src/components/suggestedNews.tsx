import getNews from "@/services/api";
import { Root } from "@/types/services";
import NewsCart from "./newsCart";

export default async function SuggestedNews() {
  const data: Root = await getNews();

  return (
    <div className="py-15">
      <h2 className="text-2xl max-sm:text-xl font-black max-sm:font-bold">
        rescent news:
      </h2>
      <div className="grid grid-flow-col overflow-auto pr-5 gap-5">
        {data.status !== "error" ? (
          data.results
            .splice(0, 5)
            .map((item) => (
              <NewsCart key={item.article_id} {...item} size="sm" />
            ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}
