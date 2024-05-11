import { Button } from "@/components/ui/button";
import useAxios from "@/hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { useRef } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa6";
export default function QuerieDetails() {
  const recommendationTitleRef = useRef();
  const prductNameRef = useRef();
  const productImageRef = useRef();
  const productReasonRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const { authUser } = useAuth();
  const axiosIntance = useAxios();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["querieDetails", id],
    queryFn: async () => await axiosIntance.get(`/queries/${id}`),
  });
  const { mutateAsync: addRecommendation } = useMutation({
    mutationFn: async (data) =>
      await axiosIntance.post("/recommendations/create-new", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["querieDetails"]);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader />
      </div>
    );
  }
  const {
    _id,
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
  const handleRecommendationProduct = async (e) => {
    e.preventDefault();
    const data = {
      queryUser: {
        ...user,
      },
      recommendationUser: {
        name: authUser?.displayName,
        email: authUser?.email,
        image: authUser?.photoURL,
      },
      querieId: _id,
      productName: name,
      querieTitle: queryTitle,
      title: recommendationTitleRef.current.value,
      name: prductNameRef.current.value,
      image: productImageRef.current.value,
      reason: productReasonRef.current.value,
    };
    try {
      await addRecommendation(data);
      toast.success("Recommendation Added Successfully!!!");
    } catch (error) {
      toast.error("Recommendation Added Failed!!");
    }
  };
  const handleGoBack = () => {
    navigate(-1 || "/");
  };
  return (
    <div className="my-10 px-3">
      <div
        onClick={() => handleGoBack()}
        className="max-w-6xl cursor-pointer mx-auto flex items-center space-x-2 py-3"
      >
        <FaArrowLeft className="w-6 h-6" />
        <p>Go Back</p>
      </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-themeColor space-x-2">
                  <FaPlus className="w-6 h-6 text-white" />
                  <span>Add Alternate Recommendation Product</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader className="px-4">
                  <DialogTitle className="text-center">
                    Add Your Recommendation Product Info.
                  </DialogTitle>
                </DialogHeader>
                <div>
                  <form
                    onSubmit={handleRecommendationProduct}
                    className="p-4 space-y-4"
                  >
                    <div>
                      <Input
                        ref={recommendationTitleRef}
                        placeholder="Recommendation Title"
                      />
                    </div>
                    <div>
                      <Input
                        ref={prductNameRef}
                        placeholder="Recommendation Protuct Name"
                      />
                    </div>
                    <div>
                      <Input
                        ref={productImageRef}
                        placeholder="Recommendation Product ImageURL"
                      />
                    </div>
                    <div>
                      <Input
                        ref={productReasonRef}
                        placeholder="Recommendation Reason"
                      />
                    </div>
                    <div className="mt-4">
                      <DialogClose asChild>
                        <Button type="submit" className="w-full">
                          Add Recommendation
                        </Button>
                      </DialogClose>
                    </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
