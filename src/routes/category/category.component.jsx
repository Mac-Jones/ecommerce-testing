import { useContext, useState, useEffect, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { useParams } from 'react-router-dom';

import './category.styles.scss';

const Category = () => {
	const { productCategory } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
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
