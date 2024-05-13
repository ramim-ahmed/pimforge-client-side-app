import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import RecentQueries from "@/components/RecentQueries";
import ShowCase from "@/components/ShowCase";

export default function Home() {
  return (
    <div>
      <Banner />
      <ShowCase />
      <About />
      <RecentQueries />
      <Contact />
    </div>
  );
}
