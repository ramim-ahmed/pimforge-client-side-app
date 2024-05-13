import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BarLoader } from "react-spinners";
export default function RecommendationsForMe() {
  const { authUser } = useAuth();
  const axiosIntance = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myRecommendations"],
    queryFn: async () =>
      await axiosIntance.get(
        `/recommendations/recommendations-for-me?email=${authUser?.email}`,
        { withCredentials: true }
      ),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
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
        <title>PIM Forge | Recommendation For Me</title>
      </Helmet>
      <div className="px-3 bg-gray-50 dark:bg-[#020817] py-10 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white dark:bg-[#020817c9] p-10 border">
          <div>
            <h1 className="text-xl font-medium">Recommendations For Me.</h1>
          </div>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Recommend User</TableHead>
                  <TableHead>Recommend Product</TableHead>
                  <TableHead>Recommend Reason</TableHead>
                  <TableHead>Querie Product Name</TableHead>
                </TableRow>
              </TableHeader>
              {data?.data?.data?.length === 0 ? (
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-red-500">
                      Recommendation For Me Empty!!
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                <TableBody>
                  {data?.data?.data?.map(
                    (
                      { _id, productName, recommendationUser, reason, name },
                      idx
                    ) => (
                      <TableRow key={_id}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>{recommendationUser.name}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{reason}</TableCell>
                        <TableCell>{productName}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              )}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
