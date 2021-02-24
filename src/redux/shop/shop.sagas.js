import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {
	firestore,
	converCollectionsSnapshotToMap,
} from './../../firebase/firebase.utils';
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess,
} from './shop.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshop = yield collectionRef.get();
		const collectionsMap = yield call(
			converCollectionsSnapshotToMap,
			snapshop,
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync,
	);
}
