import { useState } from "react";
import Category from "../components/home/category";
import Products from "../components/home/products";
import Sorting from "../components/home/sorting";
import HomeSlider from "./../components/home/homeslider";

const Home = () => {
const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")

  return (
    <div>
      <HomeSlider />
      <Sorting setSort={setSort} />
      <div className="flex gap-8 ">
      <Category setCategory={setCategory}/>
      <Products category={category} sort={sort}/>
      </div>
    </div>
  );
};

export default Home;
