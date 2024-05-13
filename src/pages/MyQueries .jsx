import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import bannerImage from "../assets/my-banner.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import MyQuerie from "@/components/MyQuerie";
import { Helmet } from "react-helmet-async";
export default function MyQueries() {
  const { authUser } = useAuth();
  const axiosIntance = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["my-queries"],
    queryFn: async () =>
      await axiosIntance.get(`/queries/my-queries?email=${authUser?.email}`, {
        withCredentials: true,
      }),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1 className="text-xl flex justify-center text-red-500 mt-10">
          Unauthorised Access!!
        </h1>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>PIM Forge | My Queries</title>
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
                  To Manage My Queries Product.
                </h1>
                <Link to="/add-querie">
                  <Button className="w-28 text-white dark:bg-[#020817] dark:text-white dark:border dark:border-white">
                    Add Querie
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {data?.data?.data?.length === 0 ? (
            <div className="flex justify-center items-center mt-10">
              <div className="text-center">
                <h1 className="text-2xl font-medium mb-4">
                  My Queries Is Empty!!
                </h1>
                <Link to="/add-querie">
                  <Button className="w-28 text-white bg-themeColor">
                    Add Querie
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
              {data.data?.data?.map((item) => (
                <MyQuerie key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
