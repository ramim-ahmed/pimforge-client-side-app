import { useQuery } from "@tanstack/react-query";
import Querie from "./Querie";
import useAxios from "@/hooks/useAxios";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <div className="pb-10 max-w-6xl mx-auto px-3 mt-10">
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
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-8 flex justify-center"
      >
        <Link to="/queries">
          <Button className="w-48">View All Queries</Button>
        </Link>
      </motion.div>
    </div>
  );
}
