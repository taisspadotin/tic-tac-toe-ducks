export const Types = {
    PLAYERS: 'game/PLAYERS'
};

const initialState = {
    payers: 2,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.PLAYERS:
        return {...};
      default:
        return state;
    }
}

export function setPlayers(players) {
    return {
        type: Types.PLAYERS,
        players
    }
}