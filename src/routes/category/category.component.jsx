import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';
import './category.styles.scss';

const Category = () => {
	const { productCategory } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[productCategory]);

	useEffect(() => {
		setProducts(categoriesMap[productCategory]);
	}, [categoriesMap, productCategory]);

	return (
		<Fragment>
			<h2 className='title'>{productCategory}</h2>
			<div className='category-container'>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</Fragment>
	);
};

export default Category;
