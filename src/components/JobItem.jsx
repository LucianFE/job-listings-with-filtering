import { useGlobalContext } from "../context/GlobalContext";
import FilterBtn from "./FilterBtn";

function JobItem({ job }) {
  const {
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    role,
    level,
  } = job;
  const { handleFilters } = useGlobalContext();
  return (
    <article
      className={`gap-8 p-6 mb-6 bg-white rounded-lg shadow-lg job-item md:p-10 lg:flex lg:items-center lg:justify-between ${
        featured && "border-l-4 border-Desaturated-Dark-Cyan"
      } `}
      key={id}
    >
      <div className="relative flex flex-col job-item-wrapper sm:flex-row sm:items-center sm:gap-6">
        <img
          src={logo}
          alt={company}
          className="absolute w-12 h-12 rounded-full -top-12 sm:static sm:w-[90px] sm:h-[90px]"
        />
        <div className="job-details">
          <div className="flex items-center gap-3">
            <p className="font-bold text-Desaturated-Dark-Cyan">{company}</p>
            {isNew && (
              <span className="inline-block px-2 py-1 font-semibold text-white uppercase rounded-full bg-Desaturated-Dark-Cyan">
                new!
              </span>
            )}
            {featured && (
              <span className="inline-block px-2 py-1 font-semibold text-white uppercase rounded-full bg-Very-Dark-Grayish-Cyan">
                Featured
              </span>
            )}
          </div>
          <h2 className="my-2 font-bold text-Very-Dark-Grayish-Cyan lg:text-[1.125rem] cursor-pointer hover:text-Desaturated-Dark-Cyan transition-colors duration-200">
            {position}
          </h2>
          <ul className="flex items-center gap-8 pb-4 border-b border-Light-Grayish-Cyan-(Filter Tablets) text-Dark-Grayish-Cyan lg:border-none">
            <li>{postedAt}</li>
            <li className="list-disc">{contract}</li>
            <li className="list-disc">{location}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 lg:justify-end">
        <FilterBtn onClick={() => handleFilters(role)}>{role}</FilterBtn>
        <FilterBtn onClick={() => handleFilters(level)}>{level}</FilterBtn>
        {languages.map((language) => (
          <FilterBtn key={language} onClick={() => handleFilters(language)}>
            {language}
          </FilterBtn>
        ))}
        {tools?.map((tool) => (
          <FilterBtn key={tool} onClick={() => handleFilters(tool)}>
            {tool}
          </FilterBtn>
        ))}
      </div>
    </article>
  );
}

export default JobItem;
