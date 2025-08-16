
export default async function getNews() {
    const result = await fetch('https://newsdata.io/api/1/latest?apikey=pub_25f3f600890442e9afaf0cce96529ba5&q=politics%2C%20technology%20trends&category=health,technology,education&country=ca,cn,us,de,fr',{
        cache: "no-cache"
    })
    const data = await result.json()

    return data
}
