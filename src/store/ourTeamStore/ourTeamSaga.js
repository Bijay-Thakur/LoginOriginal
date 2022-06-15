import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchOurTeamContent} from '../../utils/api-calls/ourTeamCalls';
import { START_FETCHING_OUR_TEAM_CONTENT, START_FETCHING_OUR_TEAM_CONTENT_WITH_SPINNER } from './ourTeamActionTypes';
import { fetchingOurTeamContentFailure, fetchingOurTeamContentSuccess, ourTeamSpinnerStarts, ourTeamSpinnerStops } from './ourTeamAction';

export function* ourTeamFetch(){

    try {
        let fetchData = yield fetchOurTeamContent();
        yield put(fetchingOurTeamContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingOurTeamContentFailure(error))
    }
}

export function* ourTeamFetchWithSpinner(){

    try {
        yield put(ourTeamSpinnerStarts())
        let fetchData = yield fetchOurTeamContent();
        yield put(fetchingOurTeamContentSuccess(fetchData))
        yield put(ourTeamSpinnerStops())

    } catch (error) {
        yield put(fetchingOurTeamContentFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startOurTeamFetch(){
    yield takeLatest(START_FETCHING_OUR_TEAM_CONTENT, ourTeamFetch)

    
}

export function* startOurTeamFetchWithSpinner(){
    yield takeLatest(START_FETCHING_OUR_TEAM_CONTENT_WITH_SPINNER, ourTeamFetchWithSpinner)

    
}

export function* ourTeamMode(){
    yield all([call(startOurTeamFetch), call(startOurTeamFetchWithSpinner)])
}