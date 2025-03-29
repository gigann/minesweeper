import { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';

// cells stored in a 8 by 8 matrix
// flags include being revealed and possessing a mine
// clicking a cell reveals it
// if this cell is a mine, game over
// otherwise, reveal all adjacent cells and mark # of adjacent mines
// iterate the above

export default function GameBoard() {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [mineChance, setMineChance] = useState(0.15);
    const [board, setBoard] = useState([]);

    // initialize the game board
    useEffect(() => {
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(<Cell />);
            }
            board.push(row);
        }

    }, [width, height, mineChance])

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: `repeat(${width}, 1fr)`,
            gridTemplateColumns: `repeat(${height}, 1fr)`,
        }}>

            {board.map((row) =>
                row.map((cell) =>
                    cell
                )
            )}

        </div>
    )
}