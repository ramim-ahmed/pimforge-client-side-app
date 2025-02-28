import { Button } from "@/components/ui/button";
import bannerImage from "../assets/querie_banner.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import { BarLoader } from "react-spinners";
import Querie from "@/components/Querie";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";
export default function Queries() {
  const [currentPage, setCurrentPage] = useState(1);
  const axiosIntance = useAxios();
  const searchInputRef = useRef();
  const [isLayout, setIsLayout] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["queries", searchValue, currentPage],
    queryFn: async () =>
      await axiosIntance.get(
        `/queries?searchTerm=${searchValue}&page=${currentPage}&limit=${6}`
      ),
  });
  const paginate = Math.ceil(data?.data?.meta?.total / 6);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSelectPage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setSearchValue(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <>
      <Helmet>
        <title>PIM Forge | Queries</title>
      </Helmet>
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-3">
          <div
            style={{ backgroundImage: `url(${bannerImage})` }}
            className="h-48 bg-center bg-cover bg-no-repeat rounded"
          >
            <div className="bg-themeColor flex justify-center items-center bg-opacity-70 h-full w-full rounded">
              <div className="text-center">
                <h1 className="text-2xl font-medium mb-5 text-white">
                  Explore All Queries
                </h1>
                <Link to="/add-querie">
                  <Button className="w-28 text-white">Add Querie</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-10 flex justify-between items-center">
            <div className="w-2/3 flex items-center">
              <Input
                ref={searchInputRef}
                className="rounded-r-none"
                placeholder="search product name..."
              />
              <Button onClick={() => handleSearch()} className="rounded-l-none">
                Search
              </Button>
            </div>
            <div className="hidden sm:block">
              {isLayout ? (
                <BsGrid3X2GapFill
                  onClick={() => setIsLayout(!isLayout)}
                  className="w-10 h-10 cursor-pointer"
                />
              ) : (
                <HiViewGrid
                  onClick={() => setIsLayout(!isLayout)}
                  className="w-10 h-10 cursor-pointer"
                />
              )}
            </div>
          </div>
          {data?.data?.data?.length <= 0 && (
            <div className="flex justify-center mt-10">
              <h1 className="text-lg font-bold">Queries Not Found!!</h1>
            </div>
          )}
          {isLoading ? (
            <div className="flex justify-center items-center mt-6">
              <BarLoader />
            </div>
          ) : (
            <div
              className={`grid ${
                isLayout
                  ? "grid-cols-2"
                  : "lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
              } gap-8 mt-6`}
            >
              {data.data?.data?.map((item) => (
                <Querie key={item._id} item={item} />
              ))}
            </div>
          )}

          {/* pagination */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="pt-10 flex justify-end"
          >
            {data?.data?.data?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                paginate={paginate}
                handleSelectPage={handleSelectPage}
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
