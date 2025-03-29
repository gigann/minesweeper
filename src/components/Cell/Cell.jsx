import './Cell.css';

import { useState, useEffect } from 'react';

function Cell(hasMine = false) {
    // const hasMine = hasMine;
    const [revealed, setRevealed] = useState(false);

    const [adjacentMines, setAdjacentMines] = useState(0);

    const [emoji, setEmoji] = useState('🟩');

    // reveal algorithm
    const reveal = () => {
        // reveal tile
        setRevealed(true);

        // if mine, game over
        if (hasMine) {
            setEmoji('💥');
            // game over
            console.log('game over');
            return;
        }

        switch (adjacentMines) {
            case 0:
                setEmoji('🟦');
                break;

            case 1:
                setEmoji('1️⃣');
                break;

            case 2:
                setEmoji('2️⃣');
                break;

            case 3:
                setEmoji('3️⃣');
                break;

            case 4:
                setEmoji('4️⃣');
                break;

            case 5:
                setEmoji('5️⃣');
                break;

            case 6:
                setEmoji('6️⃣');
                break;

            case 7:
                setEmoji('7️⃣');
                break;

            case 8:
                setEmoji('8️⃣');
                break;
        }



        // reveal adjacent tiles

    }


    return (
        <>
            {(revealed) ? (
                <div className='cell'>{emoji}</div>
            ) : (
                    <div className='clickable' onClick={() => {reveal();}}>{emoji}</div>
            )}
        </>
    )
}

export default Cell;



