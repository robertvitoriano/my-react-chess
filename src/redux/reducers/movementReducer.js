import {
  ACTION_PLAYER_WILL_MOVE,
  ACTION_SET_POSSIBLE_MOVES,
  ACTION_SET_SELECTED_POSSIBLE_MOVE,
  ACTION_SET_PIECE_BEING_MOVED,
  ACTION_REGISTER_EMPTY_POSITION,
  ACTION_REGISTER_POSITION,
  ACTION_SET_COLUMNS,
  ACTION_SET_ROWS
} from '../actions/actionTypes'
const initialState = {
  positions: [],
  selectedPiece: {
    column: 0,
    row: {
      number: 0,
      letter: ''
    },
    player: ''
  },
  possibleMoves: [],
  selectedPossibleMove: {
    column: 0,
    row: {
      number: 0,
      letter: ''
    },
    player: '',
  },
  pieceBeingMoved: {
    column: 0,
    row: {
      number: 0,
      letter: ''
    },
    player: '',
    image: ''
  },
  columns: [1, 2, 3, 4, 5, 6, 7, 8],
  rows: [
    { number: 1, letter: 'a' },
    { number: 2, letter: 'b' },
    { number: 3, letter: 'c' },
    { number: 4, letter: 'd' },
    { number: 5, letter: 'e' },
    { number: 6, letter: 'f' },
    { number: 7, letter: 'g' },
    { number: 8, letter: 'h' }
  ],
  emptyPositions: []
}


export const movementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PLAYER_WILL_MOVE:
      return {
        ...state,
        selectedPiece: action.selectedPiece
      }
    case ACTION_SET_POSSIBLE_MOVES:
      return {
        ...state,
        possibleMoves: action.possibleMoves
      }
    case ACTION_SET_SELECTED_POSSIBLE_MOVE:
      return {
        ...state,
        selectedPossibleMove: action.selectedPossibleMove
      }
    case ACTION_SET_PIECE_BEING_MOVED:
      return {
        ...state,
        pieceBeingMoved: action.pieceBeingMoved
      }
    case ACTION_REGISTER_EMPTY_POSITION:
      return {
        ...state,
        emptyPositions: action.emptyPositions
      }
    case ACTION_REGISTER_POSITION:
      return {
        ...state,
        positions: action.positions
      }
    case ACTION_SET_COLUMNS:
      return {
        ...state,
        positions: action.columns
      }
    case ACTION_SET_ROWS:
      return {
        ...state,
        positions: action.columns
      }
    default:
      return state
  }
}