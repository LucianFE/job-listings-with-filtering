import { useGlobalContext } from "../context/GlobalContext";
import TopFilterBtn from "./TopFilterBtn";

function TopFilters() {
  const { appliedFilters, handleDeleteAllFilters } = useGlobalContext();
  return (
    <section className=" w-11/12 max-w-[1440px] mx-auto bg-white p-6 rounded-lg shadow-lg lg:flex lg:items-center lg:justify-between absolute -translate-y-1/2 left-[50%] -translate-x-[50%]">
      <div className="flex flex-wrap gap-4">
        {appliedFilters.map((item) => (
          <TopFilterBtn key={item.name} item={item} />
        ))}
      </div>
      <button
        className="mt-8 font-bold transition-all duration-200 text-Very-Dark-Grayish-Cyan hover:underline hover:text-Desaturated-Dark-Cyan lg:mt-0"
        onClick={handleDeleteAllFilters}
      >
        Clear
      </button>
    </section>
  );
}

export default TopFilters;
