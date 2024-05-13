import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import RecentQueries from "@/components/RecentQueries";
import ShowCase from "@/components/ShowCase";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>PIM Forge | Home</title>
      </Helmet>
      <Banner />
      <ShowCase />
      <About />
      <RecentQueries />
      <Contact />
    </div>
  );
}
