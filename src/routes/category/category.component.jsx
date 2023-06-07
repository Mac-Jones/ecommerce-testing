import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { useParams } from 'react-router-dom';

import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

import './category.styles.scss';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
	const { productCategory } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);
	const [products, setProducts] = useState(categoriesMap[productCategory]);

	useEffect(() => {
		setProducts(categoriesMap[productCategory]);
	}, [categoriesMap, productCategory]);

	return (
		<Fragment>
			<h2 className='title'>{productCategory}</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='category-container'>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			)}
		</Fragment>
	);
};

export default Category;
