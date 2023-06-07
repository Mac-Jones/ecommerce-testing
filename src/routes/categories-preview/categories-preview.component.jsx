import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ScrollProgressBar from 'react-scroll-progress-bar';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);

	return (
		<Fragment>
			<ScrollProgressBar height='8px' />
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				})
			)}
		</Fragment>
	);
};

export default CategoriesPreview;
