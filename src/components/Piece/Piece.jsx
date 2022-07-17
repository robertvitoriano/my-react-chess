import { Container } from "./styles";
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { playerWillMoveAction, setPossibleMovesAction, setPieceBeingMovedAction } from '../../redux/actions'

export const Piece = ({ rowPosition, columnPosition }) => {


  const [isHover, setIsHover] = useState(false)
  const [currentPosition, setCurrentPosition] = useState({})
  const selectedPiece = useSelector((state) => state.movementState.selectedPiece)
  const possibleMoves = useSelector((state) => state.movementState.possibleMoves)
  const pieceBeingMoved = useSelector((state) => state.movementState.pieceBeingMoved)
  const isPossibleMove = !!possibleMoves.find((move) => move.row.letter === rowPosition.letter && move.column === columnPosition)
  const selectedPossibleMove = useSelector((state) => state.movementState.selectedPossibleMove)

  const shouldMove = isPossibleMove && selectedPossibleMove.row.number === rowPosition.number && selectedPossibleMove.column === columnPosition
  const wasPossibleMoveSelected = selectedPossibleMove.row.number && selectedPossibleMove.column
  const shouldErase = pieceBeingMoved.row.number === rowPosition.number && pieceBeingMoved.column === columnPosition && wasPossibleMoveSelected
  const rows = useSelector((state) => state.movementState.rows)
  const positions = useSelector((state) => state.movementState.positions)

  useEffect(()=>{
    if(positions && positions.length){
      const position = positions.filter((position)=>position.column === columnPosition && rowPosition.number === position.row.number)[0];
      setCurrentPosition(position)
    }
  },[positions, rowPosition, columnPosition])
  
  const dispatch = useDispatch()

  const handleSelection = (data) => {
    const { row, column, image, playerSide, piece } = data;
    if (row.number === selectedPiece.row.number && column === selectedPiece.column) {
      dispatch(playerWillMoveAction({ selectedPiece: null }))
      return dispatch(setPossibleMovesAction({ possibleMoves: [] }))
    }
    handlePossibleMoves({ row, column, image, playerSide, piece });
    return dispatch(playerWillMoveAction({ selectedPiece: { row, column, image, playerSide, piece } }))
  }

  const handlePossibleMoves = (data) => {
    const { row, column, image, playerSide, piece } = data;

    if (piece === 'pawn') {
      const pawnPossibleMoves = getPawnPossibleMoves({ row, column, playerSide });
      dispatch(setPossibleMovesAction({ possibleMoves: pawnPossibleMoves }))
      dispatch(setPieceBeingMovedAction({
        pieceBeingMoved: {
          row,
          column,
          image,
          playerSide,
          piece
        }
      }))
    }
    if (piece === 'horse') {
      const horsePossibleMoves = getHorsePossibleMoves({ row, column, playerSide });
      dispatch(setPossibleMovesAction({ possibleMoves: horsePossibleMoves }))
      dispatch(setPieceBeingMovedAction({
        pieceBeingMoved: {
          row,
          column,
          image,
          playerSide,
          piece
        }
      }))
    }
  }

  const getPawnPossibleMoves = (data) => {
    const { row, column, playerSide } = data;

    if (playerSide === 'white') {
      //@ts-ignore
      const possibleRows = rows.filter(gameBoardRow => gameBoardRow.number === row.number - 1 || gameBoardRow.number === row.number - 2);
      const possibleMoves = possibleRows.map(possibleRow => ({
        row: possibleRow,
        column: column,
      }))
      return possibleMoves;
    }

    if (playerSide === 'black') {
      //@ts-ignore
      const possibleRows = rows.filter(gameBoardRow => gameBoardRow.number === row.number + 1 || gameBoardRow.number === row.number + 2);
      const possibleMoves = possibleRows.map(possibleRow => ({
        row: possibleRow,
        column: column,
      }))
      return possibleMoves;
    }
  }

  const getHorsePossibleMoves = (data) => {
    const { row, column, playerSide } = data;

    if (playerSide === 'white') {
      //@ts-ignore
      const possibleRows = rows.filter(gameBoardRow => gameBoardRow.number === row.number - 2 || gameBoardRow.column === column - 1);
      const possibleMoves = possibleRows.map(possibleRow => ({
        row: possibleRow,
        column: column,
      }))
      return possibleMoves;
    }

    if (playerSide === 'black') {
      //@ts-ignore
      const possibleRows = rows.filter(gameBoardRow => gameBoardRow.number === row.number + 2 && gameBoardRow.column === column + 1);

      const possibleMoves = possibleRows.map(possibleRow => ({
        row: possibleRow,
        column: column,
      }))
      console.log(possibleMoves)
      return possibleMoves;
    }
  }


  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
      isSelected={!!selectedPiece && selectedPiece.row.number === rowPosition.number && selectedPiece.column === columnPosition}
      onClick={() => handleSelection(currentPosition)}
    >
      {shouldMove ? <img src={pieceBeingMoved.image} width="60px" /> : shouldErase ? '' : <img src={currentPosition && currentPosition.image} width="60px" />}
    </Container>
  )
}

// 
