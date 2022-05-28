import React from 'react';

function Modal({ restartGame, isWinner }) {
    return (
        <div className='modal-container'>
            <div className='modal'>
                <h1>{isWinner ? "You Win!" : "Game Over"}</h1>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        </div>
    )
}

export default Modal;