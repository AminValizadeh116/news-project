import NewsPageDetail from "@/components/newsPageDetail";

async function page({params}: {params:Promise<{id: string}>}) {
  const sendParams = await params

  return (
    <div>
     <NewsPageDetail params={sendParams.id}/>
    </div>
  )
}

export default page;
