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
  return (
    <div className="py-20 max-w-6xl mx-auto px-3">
      <div>
        <h1 className="text-center text-3xl font-semibold">
          Top Recent Queries
        </h1>
      </div>
      {isLoading && (
        <div className="flex justify-center mt-14">
          <BarLoader />
        </div>
      )}
      <div className="grid grid-cols-3 gap-8 mt-20">
        {data.data?.data?.map((item) => (
          <Querie key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
