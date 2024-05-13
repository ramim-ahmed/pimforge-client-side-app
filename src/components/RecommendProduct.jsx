import PropTypes from "prop-types";
import TimeAgo from "./TimeAgo";
export default function RecommendProduct({ item }) {
  const { createdAt, name, image, reason, title, recommendationUser } =
    item || {};

  return (
    <div className="border p-3">
      <div className="flex justify-center bg-gray-50 p-3">
        <img className="rounded" src={image} alt="" />
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-medium">{name}</h1>
        <p>{title}</p>
        <p>
          <strong>Reasons</strong>: {reason}
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <img
          className="w-12 h-12 object-cover rounded-full border border-themeColor"
          src={recommendationUser?.image}
          alt={recommendationUser?.name}
        />
        <div>
          <h1 className="text-xl font-medium">{recommendationUser?.name}</h1>
          <p className="-mt-1 text-sm text-gray-700">
            <TimeAgo date={createdAt} />
          </p>
        </div>
      </div>
    </div>
  );
}

RecommendProduct.propTypes = {
  item: PropTypes.object.isRequired,
};
