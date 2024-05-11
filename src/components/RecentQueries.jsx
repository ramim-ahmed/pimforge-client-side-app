import { useQuery } from "@tanstack/react-query";
import Querie from "./Querie";
import useAxios from "@/hooks/useAxios";
import { BarLoader } from "react-spinners";

export default function RecentQueries() {
  const axiosIntance = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: ["queries"],
    queryFn: async () => await axiosIntance.get("/queries"),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center mt-14">
        <BarLoader />
      </div>
    );
  }
  return (
    <div className="py-10 max-w-6xl mx-auto px-3">
      <div>
        <h1 className="text-center text-3xl font-semibold">
          Top Recent Queries
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {data.data?.data?.slice(0, 6).map((item) => (
          <Querie key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
