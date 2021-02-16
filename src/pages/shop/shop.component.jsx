import React from 'react';

import { Route } from 'react-router-dom';

import CategoryPage from './../caterogy/categoty.component';
import CollectionOverview from './../../components/collections-overview/collection-overview.component';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:categoryId`} component={CategoryPage} />
	</div>
);

export default ShopPage;
