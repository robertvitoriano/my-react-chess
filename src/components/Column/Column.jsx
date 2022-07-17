import React from "react"
import { useSelector } from "react-redux"
import { Piece } from "../Piece/Piece"
import { Square } from "../Square/Square"
import { RowLabel } from "./styles"
import {v4 as uuid} from 'uuid'


export const Column = ({ isColumnEven, columnPosition}) => {
  const rows = useSelector((state) => state.movementState.rows)
  return (
    <div style={{ position: 'relative' }}>
      {rows.map((rowPosition, i) => {
        return (
          <div style={{ position: 'relative' }} key={uuid()}>
            {columnPosition === 1 && <RowLabel >{rowPosition.letter}</RowLabel>}
            <Square key={i}
              rowPosition={rowPosition}
              isColumnEven={isColumnEven}
              columnPosition={columnPosition}
            >
              <Piece rowPosition={rowPosition} columnPosition={columnPosition} />
            </Square>
          </div>
        )
      })}
    </div>
  )
}