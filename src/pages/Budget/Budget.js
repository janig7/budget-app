import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import {
  fetchBudget,
  fetchBudgetedCategories,
} from 'data/actions/budget.actions';

import { fetchAllCategories } from 'data/actions/common.actions';

import { Grid } from './Budget.css';
import common from 'data/reducers/common.reducer';
import { LoadingIndicator } from 'components';

import BudgetCategoryList from 'pages/Budget/components/BudgetCategoryList';

const Budget = ({
  fetchBudget,
  fetchBudgetedCategories,
  fetchAllCategories,
  commonState,
  budgetState,
}) => {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
    fetchAllCategories();
  }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);

  const isLoaded = useMemo(
    () =>
      !!commonState &&
      Object.keys(commonState).length === 0 &&
      Object.keys(budgetState).length === 0,
    [commonState, budgetState]
  );

  return (
    <Grid>
      <section>
        {isLoaded ? <BudgetCategoryList /> : <LoadingIndicator />}
      </section>
      <section>Transaction list</section>
    </Grid>
  );
};

export default connect(
  (state) => {
    return {
      budget: state.budget.budget,
      commonState: state.common.loadingState,
      budgetState: state.budget.loadingState,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
  }
)(Budget);
