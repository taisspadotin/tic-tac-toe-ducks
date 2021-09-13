export const Types = {
    PLAYERS: 'game/PLAYERS'
};

const INITIAL_STATE = {
    payers: 2,
};

export default function game(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.PLAYERS:
        return {...state, payers: action.payers};
      default:
        return state;
    }
}

export const Creators = {
    setPlayers(players){
        return {
            type: Types.PLAYERS,
            players
        }
    }
}