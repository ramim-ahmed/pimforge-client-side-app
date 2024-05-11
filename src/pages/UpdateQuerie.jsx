import { Button } from "@/components/ui/button";
import useAxios from "@/hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

export default function UpdateQuerie() {
  const { id } = useParams();
  const axiosIntance = useAxios();
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["querieDetails", id],
    queryFn: async () => await axiosIntance.get(`/queries/${id}`),
  });
  const { mutateAsync: updatedQuerie } = useMutation({
    mutationFn: async (updatedData) =>
      await axiosIntance.patch(`/queries/${id}`, updatedData),
  });
  const { register, handleSubmit } = useForm();
  const { name, brand, photo, queryTitle, boyCottingReason } =
    data?.data?.data || {};
  const handleAddNewQuery = async (data) => {
    const updatedData = {
      ...data,
    };
    setLoading(true);
    try {
      await updatedQuerie(updatedData);
      toast.success("Querie Updated Successfully!!");
      setLoading(false);
    } catch (error) {
      toast.error("Querie Updated Failed");
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>PIM Forge | Add Querie</title>
      </Helmet>
      <div className="max-w-6xl mx-auto bg-[#f1f0f042]  dark:bg-dark-color border-baseColor border border-opacity-15 my-20 lg:p-10 px-3 py-8 ">
        <h1 className="text-center text-xl font-semibold">
          Update Querie | {name}
        </h1>
        <form onSubmit={handleSubmit(handleAddNewQuery)} className="mt-5">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="mb-4 lg:col-span-6 col-span-12">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Product Name
              </label>
              <input
                {...register("name")}
                placeholder="Enter Product Name"
                defaultValue={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white dark:bg-dark-color rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="brand"
                className="leading-7 text-sm text-gray-600"
              >
                Product Brand
              </label>
              <input
                {...register("brand")}
                placeholder="Enter Product Brand"
                defaultValue={brand}
                type="text"
                id="location"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-dark-color"
              />
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="photo"
                className="leading-7 text-sm text-gray-600"
              >
                Product Image URL
              </label>
              <input
                {...register("photo")}
                placeholder="Enter Product Image URL"
                defaultValue={photo}
                type="url"
                id="photo"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-dark-color"
              />
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="queryTitle"
                className="leading-7 text-sm text-gray-600"
              >
                Product Query Title
              </label>
              <input
                {...register("queryTitle")}
                placeholder="Enter Product Query Title"
                defaultValue={queryTitle}
                type="text"
                id="queryTitle"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-dark-color"
              />
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="boyCottingReason"
                className="leading-7 text-sm text-gray-600"
              >
                Product BoyCotting Reason Details
              </label>
              <input
                {...register("boyCottingReason")}
                placeholder="Enter BoyCotting Reason Details"
                defaultValue={boyCottingReason}
                type="text"
                id="boyCottingReason"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-dark-color"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-56 bg-themeColor">
              {loading ? <BarLoader color="#ffffff" /> : "Update Now"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
