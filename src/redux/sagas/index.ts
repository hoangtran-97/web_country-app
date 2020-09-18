import { all, select, takeLatest } from "redux-saga/effects";

function* saveState() {
    const state = yield select();
    yield localStorage.setItem("initState", JSON.stringify(state));
}

export default function* rootSaga() {
    yield all([takeLatest("*", saveState)]);
}
