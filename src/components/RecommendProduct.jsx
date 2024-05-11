import PropTypes from "prop-types";
export default function RecommendProduct({ item }) {
  const { name, image, reason, title } = item || {};
  return (
    <div className="border p-3">
      <div>
        <img className="rounded" src={image} alt="" />
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-medium">{name}</h1>
        <p>{title}</p>
        <p>
          <strong>Reasons</strong>: {reason}
        </p>
      </div>
    </div>
  );
}

RecommendProduct.propTypes = {
  item: PropTypes.object.isRequired,
};
