import { Button } from "@/components/ui/button";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { FaPlus } from "react-icons/fa6";
export default function QuerieDetails() {
  const { id } = useParams();
  const axiosIntance = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => await axiosIntance.get(`/queries/${id}`),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader />
      </div>
    );
  }
  const {
    photo,
    name,
    brand,
    queryTitle,
    boyCottingReason,
    recommendationCount,
    dateAndTime,
    user,
  } = data?.data?.data || {};
  const { name: userName, image } = user || {};
  return (
    <div className="my-10 px-3">
      <div className="max-w-6xl grid grid-cols-12 mx-auto p-5 bg-gray-50">
        <div className="col-span-5">
          <div className="bg-white p-3">
            <img className="h-[350px] object-cover" src={photo} alt="" />
          </div>
        </div>
        <div className="col-span-7 px-8">
          <div className="space-y-2">
            <p>{brand}</p>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>
              <strong>Query Title: </strong> {queryTitle}
            </p>
            <p>
              <strong>Alternative Reasons: </strong>
              {boyCottingReason}
            </p>
            <p>
              <strong>Recommendation : </strong>
              {recommendationCount}
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <img
              className="w-12 h-12 object-cover rounded-full border border-themeColor"
              src={image}
              alt={userName}
            />
            <div>
              <h1 className="text-xl font-medium">{userName}</h1>
              <p className="-mt-1 text-sm text-gray-700">
                {new Date(Number(dateAndTime)).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Button className="bg-themeColor space-x-2">
              <FaPlus className="w-6 h-6 text-white" />
              <span>Add Alternate Recommendation Product</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
