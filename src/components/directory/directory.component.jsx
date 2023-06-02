import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
	{
		id: 1,
		title: 'vape',
		imageUrl: 'https://i.ibb.co/GQN5TLW/smok-nord-4.jpg',
		route: 'shop/vape',
	},
	{
		id: 2,
		title: 'cap',
		imageUrl: 'https://i.ibb.co/YkzZPq7/cap-sinio-3.jpg',
		route: 'shop/cap',
	},
	{
		id: 3,
		title: 't-shirt',
		imageUrl: 'https://i.ibb.co/16DNHxk/oversize.jpg',
		route: 'shop/t-shirt',
	},
	{
		id: 4,
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/h7XYyN2/shoes-4.jpg',
		route: 'shop/sneakers',
	},
	{
		id: 5,
		title: 'smartphones',
		imageUrl: 'https://i.ibb.co/DY1Sxjd/huawei-P50.jpg',
		route: 'shop/smartphones',
	},
];

const Directory = () => {
	return (
		<div className='directory-container'>
			{categories.map((category) => {
				return <DirectoryItem category={category} key={category.id} />;
			})}
		</div>
	);
};

export default Directory;
