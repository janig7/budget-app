import { BUDGET_GET, BUDGETED_CATEGOIES_GET } from 'data/constants';
import API from 'data/fetch';

export const fetchBudget = (id) => {
  const promise = API.budget.fetchBudgetData(id);

  return {
    type: BUDGET_GET,
    promise,
  };
};

export const fetchBudgetedCategories = (id) => {
  const promise = API.budget.fetchBudgetCategoriesData(id);

  return {
    type: BUDGETED_CATEGOIES_GET,
    promise,
  };
};
