import React from 'react';

import CollectionItem from '../collection-item/collection-item.compenent';

import './collection-preview.component.scss';

export default function CollectionPreview({ title, items }) {
	console.log('collection-preview comp');
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherProps }) => (
						<CollectionItem key={id} {...otherProps} />
					))}
			</div>
		</div>
	);
}
