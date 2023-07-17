import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { useParams } from 'react-router-dom';

import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

import Spinner from '../../components/spinner/spinner.component';
import { Title, CategoryContainer } from './category.styles';

type CategoryRouteParams = {
	productCategory: string;
};

const Category = () => {
	const { productCategory } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);
	const [products, setProducts] = useState(categoriesMap[productCategory]);

	useEffect(() => {
		setProducts(categoriesMap[productCategory]);
	}, [categoriesMap, productCategory]);

	return (
		<Fragment>
			<Title>{productCategory}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryContainer>
			)}
		</Fragment>
	);
};

export default Category;
