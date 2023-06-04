import { createSelector } from 'reselect';

export const selectCategoryReducer = (state) => state.categories;
console.log(typeof selectCategoryReducer);

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesReducer) => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) => {
		console.log('categories.selector fires');
		return categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	}
);
