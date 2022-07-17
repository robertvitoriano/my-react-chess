import React from "react"
import { Container, SelectionLayer } from "./styles"
import { useSelector, useDispatch } from "react-redux"
import {registerPositionAction, setSelectedPossibleMoveAction } from "../../redux/actions"

export const Square = ({ rowPosition, isColumnEven, children, columnPosition }) => {

  const dispatch = useDispatch()

  const possibleMoves = useSelector((state) => state.movementState.possibleMoves)
  const pieceBeingMoved = useSelector((state) => state.movementState.pieceBeingMoved)
  const isPossibleMove = !!possibleMoves.find((move) => move.row.letter === rowPosition.letter && move.column === columnPosition)
  const registeredPositions = useSelector((state) => state.movementState.positions)
  const handlePieceMovement = () => {
    if(isPossibleMove){
      dispatch(setSelectedPossibleMoveAction({ selectedPossibleMove:{row: rowPosition, column: columnPosition} }))
      dispatch(registerPositionAction({ positions: [...registeredPositions,pieceBeingMoved] }))
    }
  }
  return (
    <Container
      rowPosition={rowPosition}
      isColumnEven={isColumnEven}
      columnPosition={columnPosition}
      onClick={()=>handlePieceMovement()}

    >
      <SelectionLayer
       isPossibleMove={isPossibleMove}

        />
      {children}
    </Container>
  )
}