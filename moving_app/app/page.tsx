import ItemList from "@/components/itemList/ItemList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        {/* {hasEnvVars ? <SignUpUserSteps /> : <LandingPage />} */}
        <Navbar />
        <ItemList />
        <Footer />
      </main>
    </>
  );
}
