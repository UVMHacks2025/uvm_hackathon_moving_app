import { LandingPage } from "@/components/landingPage/landing-page";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import  ItemCard  from "@/components/itemCard/ItemCard";
import ItemList from "@/components/itemList/ItemList";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        {/* {hasEnvVars ? <SignUpUserSteps /> : <LandingPage />} */}
        <ItemList />
      </main>
    </>
  );
}
