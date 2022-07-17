import { Column } from "../Column"
import { Container, ColumnLabel, ColumnContainer } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import React,{ useEffect, useState } from "react"
import {v4 as uuid} from 'uuid'
import { registerPositionAction, setColumnsAction, setRowsAction } from "../../redux/actions"

const Gameboard = () => {
  const[pieceImages, setPiecesImages] = useState({
      blackBishop:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_horse.png',
      blackKing:'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_king.png',
      blackHorse:'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_horse.png',
      blackPawn:'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_pawn.png',  
      blackQueen:'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_queen.png',
      blackRook:'https://robertvitoriano-images.s3.amazonaws.com/pieces/black_rook.png',
      whiteBishop:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_bishop.png',
      whiteKing:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_king.png',
      whiteHorse:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_horse.png',
      whitePawn:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_pawn.png',
      whiteQueen:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_queen.png',
      whiteRook:'https://robertvitoriano-images.s3.amazonaws.com/pieces/white_rook.png',
    }
  )
  const dispatch = useDispatch()
  const rows = useSelector((state) => state.movementState.rows)
  const columns = useSelector((state) => state.movementState.columns)
  useEffect(() => {
    setAllRows()
  }, [])

  const setAllRows = () =>{
    dispatch(setColumnsAction({ columns }))
    dispatch(setRowsAction({ rows }))
    const positions = getAllPositions()
    dispatch(registerPositionAction({ positions }))
  }

  const getAllPositions = () => {
    let positions = []
    columns.forEach((column) => {
      rows.forEach((row) => {
        if (row.letter === 'h' && column === 1) {
          return positions.push({ image: pieceImages.whiteRook, column: column, row: row, playerSide: 'white', piece: 'rook', instance: 1 });
        }
        //WHITE ROOK
        if (row.letter === 'h' && column === 8) {
          return positions.push({ image:pieceImages.whiteRook, column: column, row: row, playerSide: 'white', piece: 'rook', instance: 2 });
        }
        //WHITE HORSE
        if (row.letter === 'h' && column === 2) {
          return positions.push({ image: pieceImages.whiteHorse , column: column, row: row, playerSide: 'white', piece: 'horse', instance: 1 });
        }
        //WHITE HORSE
        if (row.letter === 'h' && column === 7) {
          return positions.push({ image: pieceImages.whiteHorse, column: column, row: row, playerSide: 'white', piece: 'horse', instance: 2 });
        }
        //BLACK ROOK
        if (row.letter === 'a' && column === 1) {
          return positions.push({ image: pieceImages.blackRook, column: column, row: row, playerSide: 'black', piece: 'rook', instance: 1 });
        }
        if (row.letter === 'a' && column === 8) {
          return positions.push({ image: pieceImages.blackRook, column: column, row: row, playerSide: 'black', piece: 'rook', instance: 2 });
        }
        //BLACK HORSE
        if (row.letter === 'a' && column === 2) {
          return positions.push({ image: pieceImages.blackHorse, column: column, row: row, playerSide: 'black', piece: 'horse', instance: 1 });
        }
        if (row.letter === 'a' && column === 7) {
          return positions.push({ image: pieceImages.blackHorse, column: column, row: row, playerSide: 'black', piece: 'horse', instance: 2 });
        }
        //WHITE BISHOP

        if (row.letter === 'h' && column === 3) {
          return positions.push({ image: pieceImages.whiteBishop, column: column, row: row, playerSide: 'white', piece: 'bishop', instance: 1 });
        }

        if (row.letter === 'h' && column === 6) {
          return positions.push({ image: pieceImages.whiteBishop, column: column, row: row, playerSide: 'white', piece: 'bishop', instance: 2 });
        }

        //FIRST BLACK BISHOP
        if (row.letter === 'a' && column === 3) {
          return positions.push({ image: pieceImages.blackBishop, column: column, row: row, playerSide: 'black', piece: 'bishop', instance: 1 });
        }
        //SECOND BLACK BISHOP
        if (row.letter === 'a' && column === 6) {
          return positions.push({ image: pieceImages.blackBishop, column: column, row: row, playerSide: 'black', piece: 'bishop', instance: 2 });
        }
        //WHITE QUEEN
        if (row.letter === 'h' && column === 4) {
          return positions.push({ image: pieceImages.whiteQueen, column: column, row: row, playerSide: 'white', piece: 'queen' });
        }
        //BLACK QUEEN
        if (row.letter === 'a' && column === 4) {
          return positions.push({ image: pieceImages.blackQueen, column: column, row: row, playerSide: 'black', piece: 'queen' });
        }
        //WHITE KING
        if (row.letter === 'h' && column === 5) {
          return positions.push({ image: pieceImages.whiteKing, column: column, row: row, playerSide: 'white', piece: 'king' });
        }

        //BLACK KING
        if (row.letter === 'a' && column === 5) {
          return positions.push({ image: pieceImages.blackKing, column: column, row: row, playerSide: 'black', piece: 'king' });
        }
        
        //WHITE PAWN
        if(row.letter ==='g') return positions.push({ image: pieceImages.whitePawn, column: column, row: row, playerSide: 'white', piece: 'pawn' });
        //BLACK PAWN  
        if(row.letter ==='b') return positions.push({ image: pieceImages.blackPawn, column: column, row: row, playerSide: 'black', piece: 'pawn' });

        positions.push({ image: '', column: column, row: row, playerSide: '', piece: '' });

      })
    })
   return positions
  }

  return (
    <Container>
      {columns.map((columnPosition) => (
        <ColumnContainer key={uuid()}>
          <ColumnLabel>{columnPosition}</ColumnLabel>
          <Column isColumnEven={columnPosition % 2 === 0} columnPosition={columnPosition}/>
        </ColumnContainer>
      ))}
    </Container>
  )
}

export {
  Gameboard
}