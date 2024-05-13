import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
export default function MyQuerie({ item }) {
  const axiosIntance = useAxios();
  const {
    _id,
    user,
    dateAndTime,
    name,
    photo,
    brand,
    queryTitle,
    boyCottingReason,
    recommendationCount,
  } = item || {};
  const { name: userName, image } = user || {};
  const queryClient = useQueryClient();

  const { mutateAsync: deleteQuerie } = useMutation({
    mutationFn: async (id) => await axiosIntance.delete(`/queries/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["my-queries"]);
    },
  });

  const handleDeleteQuerie = async (id) => {
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
          await deleteQuerie(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your Document has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error,
            text: "Querie Delete Failed!!",
          });
        }
      }
    });
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="border p-3 flex flex-col justify-between rounded-md"
    >
      <div className="flex justify-center bg-gray-50 p-4">
        <img className="h-[200px] object-cover" src={photo} alt={name} />
      </div>
      <div>
        <div className="mt-8 space-y-1">
          <button>{brand}</button>
          <h1 className="text-xl font-medium">{name}</h1>
          <p>{queryTitle}</p>
          <p>
            <strong>Alternative Reasons: </strong>
            {boyCottingReason}
          </p>
          <p>
            <strong>Recommendation Count: </strong>
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
        <div className="flex items-center justify-between mt-6">
          <Link to={`/querie-details/${_id}`}>
            <Button variant="outline" size="icon">
              <PiEyeBold className="h-6 w-6" />
            </Button>
          </Link>
          <Link to={`/querie-update/${_id}`}>
            <Button variant="outline" size="icon">
              <FaRegEdit className="h-6 w-6" />
            </Button>
          </Link>
          <Button
            onClick={() => handleDeleteQuerie(_id)}
            variant="outline"
            size="icon"
          >
            <MdDelete className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

MyQuerie.propTypes = {
  item: PropTypes.object.isRequired,
};
