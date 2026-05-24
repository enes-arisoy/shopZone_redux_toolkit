import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailProduct } from "./../redux/productSlice";
import DetailPage from "./../components/details/detailPage";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center font-bold gap-2 bg-blue-100 w-fit p-2 rounded-2xl cursor-pointer"
      >
        <IoArrowBack className=" text-blue-700" size={25} />

        <span className="text-sm  text-blue-700">Back </span>
      </div>

      <DetailPage detailProduct={detailProduct} />
    </div>
  );
};

export default ProductDetail;
