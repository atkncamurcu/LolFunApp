import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import combines from "./reducers";

export const store = createStore ( combines, applyMiddleware(ReduxThunk));