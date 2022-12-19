import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "./positions-slice";
import { JobPosition } from "./JobPosition";
import { addFilter } from "../filters/filter-slice";
import { selectFilters } from "../filters/filter-slice";
import usePositions from "./usePositions";

const JobList = () => {
  usePositions();
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
