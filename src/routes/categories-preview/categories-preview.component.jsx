import { Fragment, useContext } from 'react';
import ScrollProgressBar from 'react-scroll-progress-bar';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			<ScrollProgressBar height='8px' />
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};

export default CategoriesPreview;
