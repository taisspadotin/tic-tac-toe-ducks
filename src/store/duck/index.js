import { combineReducers } from "redux";

import game, {
    Creators as GameActions,
    Types as gameTypes
} from "./game";

export default combineReducers({
    game
});

export {
    GameActions
}

export {
    gameTypes
};