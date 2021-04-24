import {
  BUDGET_GET_FAILURE,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_REQUEST,
  BUDGETED_CATEGOIES_GET_REQUEST,
  BUDGETED_CATEGOIES_GET_SUCCESS,
  BUDGETED_CATEGOIES_GET_FAILURE,
} from 'data/constants';
import API from 'data/fetch';

export const fetchBudget = (id) => async (dispatch) => {
  dispatch({
    type: BUDGET_GET_REQUEST,
  });
  try {
    const response = await API.budget.fetchBudgetData(id);
    const data = await response.json();
    dispatch({
      type: BUDGET_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUDGET_GET_FAILURE,
    });
  }
};

export const fetchBudgetedCategories = (id) => async (dispatch) => {
  dispatch({
    type: BUDGETED_CATEGOIES_GET_REQUEST,
  });
  try {
    const response = await API.budget.fetchBudgetCategoriesData(id);
    const data = await response.json();
    dispatch({
      type: BUDGETED_CATEGOIES_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUDGETED_CATEGOIES_GET_FAILURE,
    });
  }
};
