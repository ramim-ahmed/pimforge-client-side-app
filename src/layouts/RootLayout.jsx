import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 2000);
  }, []);
  if (!pageLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Loader />
          <h1 className="text-center text-3xl mt-3 font-bold">PIM Forge</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
