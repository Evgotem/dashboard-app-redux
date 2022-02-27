import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/positionSelectors';
import { JobPosition } from './JobPosition';

import { addFilter } from 'store/filters/filterActions';
import { selectFilters } from 'store/filters/filterSelectors';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector(state => selectVisiblePositions(state, currentFilters));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition 
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
       />
      ))}
    </div>
  );
};

export { JobList };
