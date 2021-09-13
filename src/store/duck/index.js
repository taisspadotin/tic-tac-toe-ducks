import { combineReducers } from "redux";

import game, {
    Creators as gameActions,
    Types as gameTypes
} from "./game";

export default combineReducers({
    game
});

export {
    gameActions
}

export {
    gameTypes
};