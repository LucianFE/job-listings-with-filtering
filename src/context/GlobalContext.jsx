import { useState } from "react";
import { createContext, useContext } from "react";
import data from "../data.json";
import { useEffect } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allJobs, setAlljobs] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilters = (value) => {
    const containsValue = appliedFilters.some((item) => item.name === value);
    if (containsValue) {
      return;
    } else {
      const newFilters = { name: value };
      setAppliedFilters([...appliedFilters, newFilters]);
    }
  };

  const filterJobs = (appliedFilters) => {
    for (const filter of appliedFilters) {
      const containsFilter = allJobs.filter((item) => {
        item.role === filter ||
          item.level === filter ||
          item.languages.includes(filter) ||
          item.tools?.includes(filter);
      });
      setAlljobs(containsFilter);
    }
  };

  const handleDeleteFilter = (filter) => {
    const activeFilter = appliedFilters.filter(
      (item) => item.name !== filter.name
    );
    setAppliedFilters(activeFilter);
  };

  const handleDeleteAllFilters = () => {
    setAppliedFilters([]);
  };

  useEffect(() => {
    if (appliedFilters.length === 0) {
      setAlljobs(data);
      return;
    }
    const searchNames = appliedFilters.map((filter) => filter.name);
    const matches = data.filter((job) =>
      searchNames.every((name) =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(name)
      )
    );
    setAlljobs(matches);
  }, [appliedFilters]);

  return (
    <AppContext.Provider
      value={{
        allJobs,
        appliedFilters,
        handleFilters,
        handleDeleteFilter,
        handleDeleteAllFilters,
        filterJobs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
