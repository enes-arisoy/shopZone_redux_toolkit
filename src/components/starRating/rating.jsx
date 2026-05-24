import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rate = 0 }) => {
  const stars = [];
  const rounded = Math.round(rate * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars.push(<FaStar key={i} className="text-amber-400" />);
    } else if (i - 0.5 === rounded) {
      stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-amber-300" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

const Rating = ({data}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-2">
      <StarRating rate={data.rating?.rate ?? 0} />
      <span className="text-sm font-medium text-gray-500">
        {data.rating?.rate} ({data.rating?.count} reviews)
      </span>
    </div>
  );
};

export default Rating;
