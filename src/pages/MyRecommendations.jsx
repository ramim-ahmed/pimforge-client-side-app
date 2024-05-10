import { Button } from "@/components/ui/button";
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
import { MdDelete } from "react-icons/md";
import { BarLoader } from "react-spinners";
export default function MyRecommendations() {
  const axiosIntance = useAxios();
  const { authUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["myRecommendations"],
    queryFn: async () =>
      await axiosIntance.get(
        `/recommendations/my-recommendations?email=${authUser?.email}`
      ),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BarLoader />
      </div>
    );
  }
  console.log(data);
  return (
    <div className="px-3 bg-gray-50 my-10">
      <div className="max-w-6xl mx-auto bg-white p-10">
        <div>
          <h1 className="text-xl font-medium">My Recommendations</h1>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Querie User</TableHead>
                <TableHead>Querie Product Name</TableHead>
                <TableHead>Recommendation Product Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.data?.map(
                ({ _id, productName, queryUser, name }, idx) => (
                  <TableRow key={_id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{queryUser.name}</TableCell>
                    <TableCell>{productName}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="icon">
                        <MdDelete className="h-6 w-6 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
