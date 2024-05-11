import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function MyQuerie({ item }) {
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
  return (
    <div className="border p-3 flex flex-col justify-between rounded-md">
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
          <Button variant="outline" size="icon">
            <MdDelete className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

MyQuerie.propTypes = {
  item: PropTypes.object.isRequired,
};
