
import {
    combineReducers
} from "redux";

// reducers
import auth from './auth';
import main from './main';

const rootReducer = combineReducers({
    auth,
    main,
});

export default rootReducer;