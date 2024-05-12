import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";

export default function AddQuerie() {
  const { authUser } = useAuth();
  const axiosIntance = useAxios();
  const [loading, setLoading] = useState(false);
  const { mutateAsync: addNewQuerie } = useMutation({
    mutationFn: async (newQuery) =>
      await axiosIntance.post("/queries/create-new", newQuery),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleAddNewQuery = async (data) => {
    const newQuery = {
      user: {
        name: authUser?.displayName,
        email: authUser?.email,
        image: authUser?.photoURL,
      },
      ...data,
      dateAndTime: Date.now(),
    };
    setLoading(true);
    try {
      await addNewQuerie(newQuery);
      toast.success("Querie Created Successfully!!");
      reset();
      setLoading(false);
    } catch (error) {
      toast.error("Querie Created To Failed!!");
      setLoading(false);
    }
  };
  return (
    <div className="px-3 my-10">
      <Helmet>
        <title>PIM Forge | Add Querie</title>
      </Helmet>
      <div className="max-w-6xl mx-auto bg-[#f1f0f042] dark:bg-[#020817] border-baseColor border border-opacity-15 lg:p-10 px-3 py-8 ">
        <h1 className="text-center text-xl font-semibold">Add New Querie</h1>
        <form onSubmit={handleSubmit(handleAddNewQuery)} className="mt-5">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="mb-4 lg:col-span-6 col-span-12">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Product Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Enter Product Name"
                type="text"
                id="name"
                name="name"
                className="w-full bg-white dark:bg-[#020817] dark:text-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="brand"
                className="leading-7 text-sm text-gray-600"
              >
                Product Brand
              </label>
              <input
                {...register("brand", { required: true })}
                placeholder="Enter Product Brand"
                type="text"
                id="location"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-[#020817] dark:text-white"
              />
              {errors.brand && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="photo"
                className="leading-7 text-sm text-gray-600"
              >
                Product Image URL
              </label>
              <input
                {...register("photo", { required: true })}
                placeholder="Enter Product Image URL"
                type="url"
                id="photo"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-[#020817] dark:text-white"
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="queryTitle"
                className="leading-7 text-sm text-gray-600"
              >
                Product Query Title
              </label>
              <input
                {...register("queryTitle", { required: true })}
                placeholder="Enter Product Query Title"
                type="text"
                id="queryTitle"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-[#020817] dark:text-white"
              />
              {errors.queryTitle && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className=" mb-4 lg:col-span-6 col-span-12">
              <label
                htmlFor="boyCottingReason"
                className="leading-7 text-sm text-gray-600"
              >
                Product BoyCotting Reason Details
              </label>
              <input
                {...register("boyCottingReason", { required: true })}
                placeholder="Enter BoyCotting Reason Details"
                type="text"
                id="boyCottingReason"
                className="w-full bg-white rounded border border-gray-300 focus:border-baseColor focus:ring-2 focus:ring-baseColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors  duration-200 ease-in-out dark:bg-[#020817] dark:text-white"
              />
              {errors.boyCottingReason && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-56 bg-themeColor dark:text-white"
            >
              {loading ? <BarLoader color="#ffffff" /> : "Add Query"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
