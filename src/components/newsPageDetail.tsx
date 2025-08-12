'use client'
import getNews from '@/services/api';
import { Root } from '@/types/services';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function NewsPageDetail() {
  const [data, setData] = useState<Root>();
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    getNews().then((result) => setData(result));
  }, []);
  console.log(data)
  const specificNews = data?.results.find((i) => i.article_id === params.id);
  return (
    <div>
      {specificNews ? (
        <div className="md:grid md:grid-cols-3 gap-10 my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={specificNews.image_url} alt="news image" />
          <div className="col-span-2">
            <h2 className="text-3xl max-sm:text-xl font-bold pb-5">{specificNews.title}</h2>
            <p>{specificNews.description}</p>
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
      )}
    </div>
  );
}

export default NewsPageDetail
