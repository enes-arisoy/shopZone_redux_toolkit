import { useNavigate } from "react-router-dom";
import Rating from "../starRating/rating";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      key={product.id}
      className="relative flex flex-col gap-1 w-75 h-115 bg-gray-200 rounded-2xl p-3 cursor-pointer shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <p className="absolute -top-1 right-2 flex justify-end font-bold mt-4 bg-blue-200 rounded-2xl p-2  ">
        $ {product.price.toFixed(2)}
      </p>

      <div className=" flex-1 mx-auto mt-5 items-center justify-center mb-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 object-contain"
        />
      </div>

      <div className="flex-1">
        <Rating data={product} />
        <h2 className="text-wrap text-xl font-bold line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
