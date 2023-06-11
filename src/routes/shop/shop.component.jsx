import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { setCategories } from '../../store/categories/categories.reducer';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { fetchCategoriesAsync } from '../../store/categories/categories.action';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(fetchCategoriesAsync());
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments();
			dispatch(setCategories(categoriesArray));
		};

		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':productCategory' element={<Category />} />
		</Routes>
	);
};

export default Shop;
