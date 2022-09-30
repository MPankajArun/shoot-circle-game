import { dataReducer } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware , createStore ,combineReducers } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    mainData : dataReducer
})

export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));