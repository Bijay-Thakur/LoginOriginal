import { takeLatest, call, put, all } from 'redux-saga/effects';
import { START_FETCHING_OUR_COMPANY_CONTENT, START_FETCHING_OUR_COMPANY_CONTENT_WITH_SPINNER} from './ourCompanyActionTypes';
import { fetchingOurCompanyContentFailure, fetchingOurCompanyContentSuccess, ourCompanySpinnerStops, ourCompanySpinnerStarts } from './ourCompanyAction';
import { fetchOurCompanyContent } from '../../utils/api-calls/ourCompanyCalls';

export function* ourCompanyFetch(){

    try {
        let fetchData = yield fetchOurCompanyContent();
        yield put(fetchingOurCompanyContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingOurCompanyContentFailure(error))
    }
}

export function* ourCompanyFetchWithSpinner(){

    try {
        yield put(ourCompanySpinnerStarts())
        let fetchData = yield fetchOurCompanyContent();
        yield put(fetchingOurCompanyContentSuccess(fetchData))
        yield put(ourCompanySpinnerStops())

    } catch (error) {
        yield put(fetchingOurCompanyContentFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startOurCompanyFetch(){
    yield takeLatest(START_FETCHING_OUR_COMPANY_CONTENT, ourCompanyFetch)

    
}

export function* startOurCompanyFetchWithSpinner(){
    yield takeLatest(START_FETCHING_OUR_COMPANY_CONTENT_WITH_SPINNER, ourCompanyFetchWithSpinner)

    
}

export function* ourCompanyMode(){
    yield all([call(startOurCompanyFetch), call(startOurCompanyFetchWithSpinner)])
}