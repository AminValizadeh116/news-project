import CategoryPart from "@/components/categoryPart";
import Contributers from "@/components/contributers";
import CountryPart from "@/components/countrryPart";
import Intro from "@/components/intro";
import SuggestedNews from "@/components/suggestedNews"

export default async function Home() {

  return <div>
    <Intro />
    <hr />
    <CategoryPart />
    <hr />
    <SuggestedNews />
    <hr />
    <CountryPart />
    <hr />
    <Contributers />
    <hr />
  </div>;
}
