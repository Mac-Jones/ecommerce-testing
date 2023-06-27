import { createSelector } from 'reselect';

import { CategoriesState } from './categories.reducer';
import { RootState } from '../store';
import { CategoryMap } from './categories.types';

export const selectCategoryReducer = (state: RootState): CategoriesState =>
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
