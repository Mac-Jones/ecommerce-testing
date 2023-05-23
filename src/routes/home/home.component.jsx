import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'vape',
			// imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			imageUrl: 'https://i.ibb.co/GQN5TLW/smok-nord-4.jpg',
		},
		{
			id: 2,
			title: 'cap',
			// imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			imageUrl: 'https://i.ibb.co/YkzZPq7/cap-sinio-3.jpg',
		},
		{
			id: 3,
			title: 't-shirt',
			// imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			imageUrl: 'https://i.ibb.co/16DNHxk/oversize.jpg',
		},
		{
			id: 4,
			title: 'sneakers',
			// imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			imageUrl: 'https://i.ibb.co/h7XYyN2/shoes-4.jpg',
		},
		{
			id: 5,
			title: 'smartphones',
			// imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			imageUrl: 'https://i.ibb.co/DY1Sxjd/huawei-P50.jpg',
		},
	];

	return (
		<div>
			<Directory categories={categories} />
			<Outlet />
		</div>
	);
};

export default Home;
