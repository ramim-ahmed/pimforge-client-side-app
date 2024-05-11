import { Button } from "@/components/ui/button";
import bannerImage from "../assets/querie_banner.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import { BarLoader } from "react-spinners";
import Querie from "@/components/Querie";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
export default function Queries() {
  const axiosIntance = useAxios();
  const searchInputRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["queries", searchValue],
    queryFn: async () =>
      await axiosIntance.get(`/queries?searchTerm=${searchValue}`),
  });

  const handleSearch = () => {
    setSearchValue(searchInputRef.current.value);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader />
      </div>
    );
  }

  return (
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
        <div className="pt-10">
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
        </div>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {data.data?.data?.map((item) => (
            <Querie key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
