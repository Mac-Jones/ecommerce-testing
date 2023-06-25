import { createSelector } from 'reselect';

import { CategoriesState } from './categories.reducer';

import { CategoryMap } from './categories.types';

// Replace `AppSliceState` with the actual type representing your categories slice state.
type AppSliceState = CategoriesState;

type AppState = {
	categories: AppSliceState;
	// Other slices of the application state...
};

export const selectCategoryReducer = (state: AppState): CategoriesState =>
	state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap => {
		return categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {} as CategoryMap);
	}
);

export const selectIsCategoriesLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
);
