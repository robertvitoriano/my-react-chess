import {
  ACTION_PLAYER_WILL_MOVE,
  ACTION_SET_POSSIBLE_MOVES,
  ACTION_SET_PIECE_BEING_MOVED,
  ACTION_SET_SELECTED_POSSIBLE_MOVE,
  ACTION_REGISTER_EMPTY_POSITION,
  ACTION_REGISTER_POSITION,
  ACTION_SET_COLUMNS,
  ACTION_SET_ROWS
} from './actionTypes'

export const playerWillMoveAction = (({ selectedPiece }) => {
  return {
    type: ACTION_PLAYER_WILL_MOVE,
    selectedPiece
  }
})

export const setPossibleMovesAction = ({ possibleMoves }) => ({
  type: ACTION_SET_POSSIBLE_MOVES,
  possibleMoves,
})

export const setSelectedPossibleMoveAction = ({ selectedPossibleMove }) => ({
  type: ACTION_SET_SELECTED_POSSIBLE_MOVE,
  selectedPossibleMove,
})

export const setPieceBeingMovedAction = ({ pieceBeingMoved }) => ({
  type: ACTION_SET_PIECE_BEING_MOVED,
  pieceBeingMoved,
})

export const registerEmptyPosition = ({emptyPositions}) =>({
    type: ACTION_REGISTER_EMPTY_POSITION,
    emptyPositions,
})

export const registerPositionAction = ({positions}) =>({
    type: ACTION_REGISTER_POSITION,
    positions,
})
export const setRowsAction = ({rows}) =>({
  type: ACTION_SET_ROWS,
  rows,
})
export const setColumnsAction = ({columns}) =>({
  type: ACTION_SET_COLUMNS,
  columns,
})