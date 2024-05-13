import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Querie({ item }) {
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
        <div>
          <Link to={`/querie-details/${_id}`}>
            <div className="mt-4">
              <Button className="w-full dark:bg-[#020817] dark:text-white dark:border dark:border-white">
                Add Recommendation
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

Querie.propTypes = {
  item: PropTypes.object.isRequired,
};
