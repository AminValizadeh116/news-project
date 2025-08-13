'use client'
import getNews from '@/services/api';
import { Root } from '@/types/services';
// import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import NewsPageData from './newsPageData';

function NewsPageDetail() {
  const params = useParams()
  const [data, setData] = useState<Root>();
  useEffect(() => {
    getNews().then((result) => setData(result));
  }, []);
  
  if (!data || !params?.id) {
    return <p>Unable to load news data.</p>;
  }
  else {
    return(
      <NewsPageData data={data} id={String(params.id)} />
    )
  }
  // return (
  //   <div>
  //     {data.status != 'error' ? 
  //     <h2>{data.results.find(i => i.article_id == params.id)?.title}</h2>
  //     : <> data is not loaded </>}
      {/* {data.results !== 'error' ? (
        <div className="md:grid md:grid-cols-3 gap-10 my-10">
          <img src={specificNews.image_url} alt="news image" />
          <div className="col-span-2">
            <h2 className="text-3xl max-sm:text-xl font-bold pb-5">{specificNews.title}</h2>
            <p>{specificNews.description}</p>
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                <img
                  src={specificNews.source_icon}
                  className="w-20 h-20 max-sm:w-15 max-sm:h-15 rounded-full"
                  alt="source_icon"
                />
                <Link
                  className="font-serif max-sm:text-sm font-bold text-rose-900 italic"
                  href={specificNews.source_url}
                >
                  {specificNews.source_name}
                </Link>
              </div>
              <p className="text-neutral-500 max-md:text-xs text-right">
                {specificNews.pubDate}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>data is not recognized</p>
      )} */}
  //   </div>
  // );
}

export default NewsPageDetail
