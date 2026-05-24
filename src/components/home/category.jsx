import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/4 h-fit max-md:hidden bg-gray-200 py-5 px-3.5 rounded-2xl">
      <h2 className="text-2xl font-bold border-b border-gray-300 bg-blue-200 p-1 rounded-2xl ">
        Categories
      </h2>
      {categories?.map((item) => (
        <div
          key={item}
          className="mt-1 cursor-pointer rounded-2xl p-2 text-base font-medium capitalize transition-colors duration-100 hover:bg-gray-300"
          onClick={()=>setCategory(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Category;
