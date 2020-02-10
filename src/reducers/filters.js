import { CHANGE_FILTER } from '../constans/constans';

const BASIC_FILTER = 'all';

const filter = (state = BASIC_FILTER, action) => {
  const { activeFilter, type } = action;

  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
};

export default filter;
