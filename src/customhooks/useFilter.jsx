import { useState, useCallback } from "react";

const useFilter = (initialData) => {
  const [filteredData, setFilteredData] = useState(initialData);

  const filterData = useCallback(
    (filterCriteria) => {
      const { category, value } = filterCriteria;

      const result = initialData.filter((item) => {
        const matchesCategory =
          category === "all" || item.category === value;  
        return matchesCategory;
      });

      setFilteredData(result);
    },[initialData]);

  return { filteredData, filterData };
};

export default useFilter;
