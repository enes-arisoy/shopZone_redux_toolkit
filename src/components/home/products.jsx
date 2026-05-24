import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "./../../redux/productSlice";
import { useEffect } from "react";
import Loader from "../loader/loader";
import Error from "./../error/error";
import ProductCard from "../card/productCard";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const safeProducts = Array.isArray(products) ? products : [];

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  if (loading) return <Loader />;
  if (error)
    return <Error message={error} onRetry={() => dispatch(getProducts())} />;

  return (
    <div className=" md:max-w-3/4 flex flex-wrap max-md:place-content-center gap-5">
      {[...safeProducts]
        .sort((a, b) => {
          if (sort === "inc") return a.price - b.price;
          if (sort === "desc") return b.price - a.price;
          return 0;
        })
        .map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
    </div>
  );
};

export default Products;
