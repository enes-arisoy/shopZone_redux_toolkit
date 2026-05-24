const Sorting = ({setSort}) => {
  return (
    <div className="bg-gray-200 my-5 p-5 flex items-center justify-end rounded-full">
      <select
        name="sort"
        id="sort"
        className="border border-gray-400 rounded-full py-1 px-2 outline-none"
        onChange={e=>setSort(e.target.value)}
        >
        <option default>Sort</option>
        <option value="inc">Increase</option>
        <option value="desc">Decrease</option>
      </select>
    </div>
  );
};

export default Sorting;
