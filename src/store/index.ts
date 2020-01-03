import { repositoriesState } from "./ducks/repositories/types";
import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks/rootReducers";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  repositories: repositoriesState;
}

const sagaMiddleWare = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;
