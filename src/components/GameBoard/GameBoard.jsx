import { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';

export default function GameBoard() {
    const width = 10;
    const height = 10;
    const mineChance = 0.15;
    const [board, setBoard] = useState([]);

    // initialize the game board
    useEffect(() => {
        for (let i = 0; i < height; i++) {
            let row = [];

            for (let j = 0; j < width; j++) {

            }
        }

    }, [])

    const createBoard = () => {

    }

    return (
        <>
            <Cell />
        </>
    )
}