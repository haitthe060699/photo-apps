import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import pageReducer from "./pageReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import statReducer from "./statReducer";

const rootReducer = combineReducers({
  images: imagesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statReducer,
});

export default rootReducer;
