import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import Rating from "../starRating/rating";
import { addToCart } from "../../redux/cartSlice";

const ADDED_RESET_MS = 2000;

const DetailPage = ({ detailProduct }) => {
  const dispatch = useDispatch();
  const data = detailProduct?.products;
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const resetTimerRef = useRef(null);

  const MAX_QUANTITY = data?.rating?.count ?? 10;

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ product: data, quantity }));
    setAddedToCart(true);

    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setAddedToCart(false);
    }, ADDED_RESET_MS);
  };

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1));

  if (!data?.id) {
    return null;
  }

  return (
    <div className="my-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex items-center justify-center rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
          <img
            className="max-h-96 w-full object-contain transition-transform duration-300 hover:scale-105"
            src={data.image}
            alt={data.title}
          />
        </div>

        <div className="flex flex-col gap-5">
          {data.category && (
            <span className="w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold capitalize text-blue-700">
              {data.category}
            </span>
          )}

          <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
            {data.title}
          </h1>

          <Rating data={data}/>

          <p className="leading-relaxed text-gray-600">{data.description}</p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">
              ${data.price?.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400">USD</span>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                onClick={decrease}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-white hover:shadow disabled:cursor-not-allowed disabled:opacity-40"
              >
                <HiMinus size={20} />
              </button>
              <span className="min-w-12 text-center text-lg font-bold text-gray-800">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increase}
                disabled={quantity >= MAX_QUANTITY}
                aria-label="Increase quantity"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-white hover:shadow disabled:cursor-not-allowed disabled:opacity-40"
              >
                <HiPlus size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-base font-bold text-white shadow-md transition duration-300 ${
                addedToCart
                  ? "bg-green-500 hover:bg-green-500"
                  : "bg-blue-500 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg active:translate-y-0"
              }`}
            >
              <IoCartOutline size={22} />
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
