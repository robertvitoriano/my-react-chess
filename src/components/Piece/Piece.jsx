import { Container } from "./styles";
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { playerWillMoveAction, setPossibleMovesAction, setPieceBeingMovedAction } from '../../redux/actions'

export const Piece = ({ rowPosition, columnPosition }) => {

  const [pieceSettings, setPieceSettings] = useState({
    piece: '',
    playerSide: '',
    row: { letter: '', number: 0 },
    column: 0,
    image: '',
  });
  const [isHover, setIsHover] = useState(false)
  const selectedPiece = useSelector((state) => state.movementState.selectedPiece)
  const possibleMoves = useSelector((state) => state.movementState.possibleMoves)
  const pieceBeingMoved = useSelector((state) => state.movementState.pieceBeingMoved)
  const isPossibleMove = !!possibleMoves.find((move) => move.row.letter === rowPosition.letter && move.column === columnPosition)
  const selectedPossibleMove = useSelector((state) => state.movementState.selectedPossibleMove)

  const shouldMove = isPossibleMove && selectedPossibleMove.row.number === rowPosition.number && selectedPossibleMove.column === columnPosition
  const wasPossibleMoveSelected = selectedPossibleMove.row.number && selectedPossibleMove.column
  const shouldErase = pieceBeingMoved.row.number === rowPosition.number && pieceBeingMoved.column === columnPosition && wasPossibleMoveSelected
  const rows = useSelector((state) => state.movementState.rows)
  const dispatch = useDispatch()

  useEffect(() => {
    setPiecesInitialPositions(rowPosition, columnPosition);
  }, [])

  const setPiecesInitialPositions = (rowPosition, columnPosition) => {
    const pieceImages = {
      blackBishop: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_bishop.png',
      blackKing: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_king.png',
      blackHorse: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_horse.png',
      blackPawn: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_pawn.png',
      blackQueen: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_queen.png',
      blackRook: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_rook.png',
      whiteBishop: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_bishop.png',
      whiteKing: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_king.png',
      whiteHorse: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_horse.png',
      whitePawn: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_pawn.png',
      whiteQueen: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_queen.png',
      whiteRook: 'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_rook.png',
    }

    if (rowPosition.letter === 'h' && columnPosition === 1) {
      return setPieceSettings({ image: pieceImages.whiteRook, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'rook', instance: 1 });
    }
    //WHITE ROOK
    if (rowPosition.letter === 'h' && columnPosition === 8) {
      return setPieceSettings({ image: pieceImages.whiteRook, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'rook', instance: 2 });
    }
    //WHITE HORSE
    if (rowPosition.letter === 'h' && columnPosition === 2) {
      return setPieceSettings({ image: pieceImages.whiteHorse, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'horse', instance: 1 });
    }
    //WHITE HORSE
    if (rowPosition.letter === 'h' && columnPosition === 7) {
      return setPieceSettings({ image: pieceImages.whiteHorse, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'horse', instance: 2 });
    }
    //BLACK ROOK
    if (rowPosition.letter === 'a' && columnPosition === 1) {
      return setPieceSettings({ image: pieceImages.blackRook, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'rook', instance: 1 });
    }
    if (rowPosition.letter === 'a' && columnPosition === 8) {
      return setPieceSettings({ image: pieceImages.blackRook, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'rook', instance: 2 });
    }
    //BLACK HORSE
    if (rowPosition.letter === 'a' && columnPosition === 2) {
      return setPieceSettings({ image: pieceImages.blackHorse, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'horse', instance: 1 });
    }
    if (rowPosition.letter === 'a' && columnPosition === 7) {
      return setPieceSettings({ image: pieceImages.blackHorse, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'horse', instance: 2 });
    }
    //WHITE BISHOP

    if (rowPosition.letter === 'h' && columnPosition === 3) {
      return setPieceSettings({ image: pieceImages.whiteBishop, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'bishop', instance: 1 });
    }

    if (rowPosition.letter === 'h' && columnPosition === 6) {
      return setPieceSettings({ image: pieceImages.whiteBishop, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'bishop', instance: 2 });
    }

    //FIRST BLACK BISHOP
    if (rowPosition.letter === 'a' && columnPosition === 3) {

      return setPieceSettings({ image: pieceImages.blackBishop, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'bishop', instance: 1 });
    }
    //SECOND BLACK BISHOP
    if (rowPosition.letter === 'a' && columnPosition === 6) {
      return setPieceSettings({ image: pieceImages.blackBishop, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'bishop', instance: 2 });
    }
    //WHITE QUEEN
    if (rowPosition.letter === 'h' && columnPosition === 4) {
      return setPieceSettings({ image: pieceImages.whiteQueen, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'queen' });
    }
    //BLACK QUEEN
    if (rowPosition.letter === 'a' && columnPosition === 4) {
      return setPieceSettings({ image: pieceImages.blackQueen, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'queen' });
    }
    //WHITE KING
    if (rowPosition.letter === 'h' && columnPosition === 5) {
      return setPieceSettings({ image: pieceImages.whiteKing, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'king' });
    }

    //BLACK KING
    if (rowPosition.letter === 'a' && columnPosition === 5) {
      return setPieceSettings({ image: pieceImages.blackKing, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'king' });
    }

    //WHITE PAWN
    if (rowPosition.letter === 'g') return setPieceSettings({ image: pieceImages.whitePawn, column: columnPosition, row: rowPosition, playerSide: 'white', piece: 'pawn' });
    //BLACK PAWN  
    if (rowPosition.letter === 'b') return setPieceSettings({ image: pieceImages.blackPawn, column: columnPosition, row: rowPosition, playerSide: 'black', piece: 'pawn' });

    setPieceSettings({ image: '', column: columnPosition, row: rowPosition, playerSide: '', piece: '' });

  }
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
      onClick={() => handleSelection(pieceSettings)}
    >
      {shouldMove ? <img src={pieceBeingMoved.image} width="60px" /> : shouldErase ? '' : <img src={pieceSettings.image} width="60px" />}
    </Container>
  )
}

// 
