import React from 'react';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

function CollectionPage({ collection }) {
	return (
		<div className='collection-page'>
			<h2>Collection PAGE</h2>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);