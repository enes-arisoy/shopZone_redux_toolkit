import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "./../../redux/productSlice";
import { useEffect, useMemo, useState } from "react";
import Loader from "../loader/loader";
import Error from "./../error/error";
import ProductCard from "../card/productCard";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const safeProducts = useMemo(() => {
    return Array.isArray(products) ? products : [];
  }, [products]);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    setCurrentPage((prev) => prev !== 1 ? 1 : prev);
  }, [category, sort, safeProducts.length]);

  const sortedProducts = useMemo(() => {
    return [...safeProducts].sort((a, b) => {
      if (sort === "inc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });
  }, [safeProducts, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / itemsPerPage));
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error)
    return <Error message={error} onRetry={() => dispatch(getProducts())} />;

  return (
    <div className="md:max-w-3/4">
      <div className="flex flex-wrap justify-center gap-5">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="m-8 flex flex-wrap items-center justify-center gap-2 text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`min-w-10 rounded-full px-4 py-2 transition ${
                page === currentPage
                  ? "bg-blue-300 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
