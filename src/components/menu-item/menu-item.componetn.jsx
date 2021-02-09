import React from 'react';
import './menu-item.styles.scss';

export default function MenuItem({ title, imageUrl, size }) {
	return (
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className={`${size} menu-item`}
		>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<p className='subtitle'>SHOP NOW</p>
			</div>
		</div>
	);
}