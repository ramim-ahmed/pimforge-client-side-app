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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { BarLoader } from "react-spinners";
import Swal from "sweetalert2";
export default function MyRecommendations() {
  const axiosIntance = useAxios();
  const { authUser } = useAuth();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["myRecommendations"],
    queryFn: async () =>
      await axiosIntance.get(
        `/recommendations/my-recommendations?email=${authUser?.email}`
      ),
  });

  const { mutateAsync: deleteRecommendation } = useMutation({
    mutationFn: async ({ id, querieId }) =>
      await axiosIntance.delete(`/recommendations/${id}?querieId=${querieId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["myRecommendations"]);
    },
  });
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  const handleDeleteRecommendation = async (id, querieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRecommendation({ id, querieId });
          Swal.fire({
            title: "Deleted!",
            text: "Your Document has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error,
            text: "Recommendation Delete Failed!!",
          });
        }
      }
    });
  };
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
                ({ _id, productName, queryUser, name, querieId }, idx) => (
                  <TableRow key={_id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{queryUser.name}</TableCell>
                    <TableCell>{productName}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeleteRecommendation(_id, querieId)
                        }
                        variant="outline"
                        size="icon"
                      >
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
