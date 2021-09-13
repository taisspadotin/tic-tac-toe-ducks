export const Types = {
    PLAYERS: 'game/PLAYERS'
};

const INITIAL_STATE = {
    players: 1,
};

export default function game(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.PLAYERS:
        return {...state, players: action.players};
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